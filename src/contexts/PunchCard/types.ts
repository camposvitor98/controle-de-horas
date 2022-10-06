import { ReactElement } from "react";
type TimeToShow = {
  hours: string;
  minutes: string;
  seconds: string;
};

export type PunchCard = {
  id: string;
  logs: { action: string; datetime: string }[];
  workdayWorkedSeconds: number;
};

export type PunchCardContext = {
  loading: boolean;
  isRunning: boolean;
  isPaused: boolean;
  totalWorkingDay: TimeToShow;
  workdayWorked: TimeToShow;
  remainingWorkday: TimeToShow;
  punchCard: PunchCard[];
  startWorkday: () => void;
  finishWorkday: () => void;
  pauseWorkday: () => void;
  resumeWorkday: () => void;
  getLogs: () => void;
};

export type PunchCardProvider = {
  children: ReactElement | ReactElement[];
};
