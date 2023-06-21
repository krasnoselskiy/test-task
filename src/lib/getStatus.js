export const getStatus = (item) => {
  if (item.importedAmount === 0 && item.importedIgnoredAmount === 0) {
    return "not imported";
  }

  if (item.totalAmount === item.importedAmount) {
    if (item.totalAmount === 0 && item.importedIgnoredAmount !== 0) {
      return "fully imported";
    }
    return "fully imported";
  }

  if (item.isGettingRefunds || item.isGettingAddresses) {
    return "fetching events";
  }

  if (item.planUpgradeNeeded) {
    return "upgrade";
  }

  if (!item.covered) {
    return "buy";
  }

  if (
    item.totalAmount !== item.importedAmount &&
    (item.totalAmount !== 0 || item.importedIgnoredAmount !== 0)
  ) {
    return "incomplete import";
  }
};

// Statuses State criteria:
// **not imported** -->  importedAmount  === 0 and importedIgnoredAmount  === 0
// **fully imported** --> totalAmount === importedAmount (and if totalAmount is 0, check if importedIgnoredAmount is not 0)

// **fetching events** --> if isGettingRefunds or isGettingAddresses are true
// **upgrade** --> if planUpgradeNeeded is true
// **buy** --> if covered is false
// **incomplete import** --> if totalAmount !== importedAmount and (totalAmount !== 0 or importedIgnoredAmount !== 0)
