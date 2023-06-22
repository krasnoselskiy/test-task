import { getStatusType } from "./getStatus";
import { PRIORITIES, STATUSES } from "./constants";

const getSettlementPriority = (settlement) => {
  const status = getStatusType(settlement);

  switch (status) {
    case STATUSES.TYPES.FULLY_IMPORTED:
      return PRIORITIES.FULLY_IMPORTED;
    case STATUSES.TYPES.FETCHING_EVENTS:
      return PRIORITIES.FETCHING_EVENTS;
    case STATUSES.TYPES.UPGRADE:
      return PRIORITIES.UPGRADE;
    case STATUSES.TYPES.BUY:
      return PRIORITIES.BUY;
    case STATUSES.TYPES.NOT_IMPORTED:
      return PRIORITIES.NOT_IMPORTED;
    case STATUSES.TYPES.INCOMPLETE_IMPORT:
      return PRIORITIES.INCOMPLETE_IMPORT;

    default:
      return;
  }
};

export const getSortedSettlements = (settlements) => {
  const settlementsWithPriorities = settlements.map((settlement) => {
    return {
      ...settlement,
      priority: getSettlementPriority(settlement),
    };
  });

  const sortedSettlements = settlementsWithPriorities.sort((a, b) =>
    a.priority > b.priority ? 1 : b.priority > a.priority ? -1 : 0
  );

  return sortedSettlements;
};
