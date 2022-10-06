import { useContextSelector } from "use-context-selector";
import { PunchCardContext } from "..";

export const usePunchCardLogs = () => {
  const loading = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.loading
  );
  const getLogs = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.getLogs
  );
  const punchCard = useContextSelector(
    PunchCardContext,
    (punchCard) => punchCard.punchCard
  );

  return {
    loading,
    getLogs,
    punchCard,
  };
};
