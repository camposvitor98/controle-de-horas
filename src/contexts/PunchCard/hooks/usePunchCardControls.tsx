import { useContextSelector } from "use-context-selector";
import { PunchCardContext } from "..";

export const usePunchCardControls = () => {
  const startWorkday = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.startWorkday
  );
  const finishWorkday = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.finishWorkday
  );
  const pauseWorkday = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.pauseWorkday
  );
  const resumeWorkday = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.resumeWorkday
  );
  const isRunning = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.isRunning
  );
  const isPaused = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.isPaused
  );

  return {
    startWorkday,
    finishWorkday,
    pauseWorkday,
    resumeWorkday,
    isRunning,
    isPaused,
  };
};
