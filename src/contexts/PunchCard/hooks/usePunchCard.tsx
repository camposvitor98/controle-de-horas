import { useContextSelector } from "use-context-selector";
import { PunchCardContext } from "..";

export const usePunchCard = () => {
  const totalWorkingDay = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.totalWorkingDay
  );
  const workdayWorked = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.workdayWorked
  );
  const remainingWorkday = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.remainingWorkday
  );

  return {
    totalWorkingDay,
    workdayWorked,
    remainingWorkday,
  };
};
