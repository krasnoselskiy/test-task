import { STATUSES } from "./constants";

export const getStatusType = (item) => {
  if (item.isGettingRefunds || item.isGettingAddresses) {
    return STATUSES.TYPES.FETCHING_EVENTS;
  }

  if (item.planUpgradeNeeded) {
    return STATUSES.TYPES.UPGRADE;
  }

  if (!item.covered) {
    return STATUSES.TYPES.BUY;
  }

  if (
    item.totalAmount !== item.importedAmount &&
    (item.totalAmount !== 0 || item.importedIgnoredAmount !== 0)
  ) {
    return STATUSES.TYPES.INCOMPLETE_IMPORT;
  }

  if (
    item.totalAmount &&
    item.importedAmount &&
    item.totalAmount === item.importedAmount
  ) {
    if (item.totalAmount === 0 && item.importedIgnoredAmount !== 0) {
      return STATUSES.TYPES.NOT_IMPORTED;
    }
    return STATUSES.TYPES.FULLY_IMPORTED;
  }

  if (
    (item.importedAmount === 0 && item.importedIgnoredAmount === 0) ||
    (!item.importedAmount && !item.importedIgnoredAmount)
  ) {
    return STATUSES.TYPES.NOT_IMPORTED;
  }
};

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getStatus = (item) => {
  const status = getStatusType(item);

  if (status === STATUSES.TYPES.FULLY_IMPORTED) {
    return `${USDollar.format(item.importedAmount)}`;
  }

  if (status === STATUSES.TYPES.NOT_IMPORTED) {
    if (item.open) {
      return STATUSES.LABELS.OPEN;
    }

    return STATUSES.LABELS.FETCHING_EVENTS;
  }

  if (status === STATUSES.TYPES.FETCHING_EVENTS) {
    return STATUSES.LABELS.FETCHING_EVENTS;
  }

  if (status === STATUSES.TYPES.UPGRADE) {
    return STATUSES.LABELS.UPGRADE;
  }

  if (status === STATUSES.TYPES.BUY) {
    return STATUSES.LABELS.BUY;
  }

  if (status === STATUSES.TYPES.INCOMPLETE_IMPORT) {
    return STATUSES.LABELS.INCOMPLETE_IMPORT;
  }
};
