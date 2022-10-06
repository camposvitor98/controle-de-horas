import { useCallback, useEffect, useMemo, useState } from "react";

import * as Types from "./types";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "react-toastify";
import { api } from "services/api";
import { createContext } from "use-context-selector";

export const PunchCardContext = createContext({} as Types.PunchCardContext);

const totalWorkingDaySeconds = 8 * 60 * 60; //hours in seconds (08:00 hours)
let countdownTimeout: number;

export const PunchCardProvider = (props: Types.PunchCardProvider) => {
  const { children } = props;

  const [loading, setLoading] = useState(false);
  const [punchCard, setPunchCard] = useState<Types.PunchCard[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [workdayWorkedSeconds, setWorkdayWorkedSeconds] = useState(0);

  const remainingWorkdaySeconds = useMemo(
    () => totalWorkingDaySeconds - workdayWorkedSeconds,
    [workdayWorkedSeconds]
  );

  const convertToShow = (totalSeconds: number) => {
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    const minutes = String(
      Math.floor(Math.floor(totalSeconds / 60) % 60)
    ).padStart(2, "0");

    const hours = String(
      Math.floor(Math.floor(totalSeconds / 60) / 60)
    ).padStart(2, "0");

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const totalWorkingDay = useMemo(
    () => convertToShow(totalWorkingDaySeconds),
    [totalWorkingDaySeconds]
  );

  const workdayWorked = useMemo(
    () => convertToShow(workdayWorkedSeconds),
    [workdayWorkedSeconds]
  );

  const remainingWorkday = useMemo(
    () => convertToShow(remainingWorkdaySeconds),
    [remainingWorkdaySeconds]
  );

  const getLogs = () => {
    setLoading(true);
    api
      .get("/punchCard")
      .then((res) => {
        setPunchCard(res.data);
        const currentLog = res.data.find(
          (item: Types.PunchCard) =>
            item.id === format(new Date(), "dd-MM-yyyy")
        );
        if (currentLog) {
          setWorkdayWorkedSeconds(currentLog.workdayWorkedSeconds);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const updateLogs = async (
    action: "start" | "finish" | "pause" | "resume"
  ) => {
    const actions = {
      start: "Iniciou o horário de trabalho",
      finish: "Encerrou o horário de trabalho",
      pause: "Pausou o horário de trabalho",
      resume: "Retomou o horário de trabalho",
    };

    const currentId = format(new Date(), "dd-MM-yyyy");

    let workdayWorkedSeconds = 0;
    setWorkdayWorkedSeconds((seconds) => {
      workdayWorkedSeconds = seconds;
      return seconds;
    });

    const currentLog = await api.get("/punchCard", {
      params: { id: currentId },
    });
    const currentLogs =
      currentLog.data.find((log: Types.PunchCard) => log.id === currentId)
        ?.logs || [];

    const newLog = {
      action:
        action === "start" && currentLogs.length
          ? actions.resume
          : actions[action],
      datetime: format(new Date(), "dd/MM/yyyy (EEE) HH:mm:ss", {
        locale: ptBR,
      }),
    };

    const data = {
      id: currentId,
      logs: [...currentLogs, newLog],
      workdayWorkedSeconds,
    };

    if (currentLogs.length) {
      api
        .patch(`/punchCard/${currentId}`, data)
        .then((res) => toast.success("Salvo com sucesso!"))
        .catch((err) => {
          toast.error("Erro! Tente Novamente");
        });
    } else {
      api
        .post("/punchCard", data)
        .then((res) => toast.success("Salvo com sucesso!"))
        .catch((err) => toast.error("Erro! Tente Novamente"));
    }

    setPunchCard((punchCard) => [
      ...punchCard.filter((log) => log.id !== data.id),
      data,
    ]);
  };

  const startWorkday = useCallback(() => {
    setIsRunning(true);
    setIsPaused(false);

    updateLogs("start");
  }, []);

  const finishWorkday = useCallback(() => {
    setIsRunning(false);
    clearTimeout(countdownTimeout);

    updateLogs("finish");
  }, []);

  const pauseWorkday = useCallback(() => {
    setIsPaused(true);
    clearTimeout(countdownTimeout);

    updateLogs("pause");
  }, []);

  const resumeWorkday = useCallback(() => {
    setIsPaused(false);

    updateLogs("resume");
  }, []);

  useEffect(() => {
    getLogs();
  }, []);

  useEffect(() => {
    if (!isPaused && isRunning && remainingWorkdaySeconds > 0) {
      countdownTimeout = setTimeout(() => {
        setWorkdayWorkedSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (isRunning && remainingWorkdaySeconds === 0) {
      setIsRunning(false);
    }
  }, [isRunning, remainingWorkdaySeconds, isPaused]);

  return (
    <PunchCardContext.Provider
      value={{
        totalWorkingDay,
        workdayWorked,
        remainingWorkday,
        loading,
        startWorkday,
        finishWorkday,
        pauseWorkday,
        resumeWorkday,
        isRunning,
        isPaused,
        getLogs,
        punchCard,
      }}
    >
      {children}
    </PunchCardContext.Provider>
  );
};
