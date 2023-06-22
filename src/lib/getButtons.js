import { getStatusType } from "./getStatus";
import { BUTTONS, STATUSES } from "./constants";

const getFirstButton = (status) => {
  switch (status) {
    case STATUSES.TYPES.FULLY_IMPORTED:
      return {
        type: BUTTONS.TYPES.PRIMARY,
        text: "Import",
        disabled: true,
      };

    case STATUSES.TYPES.NOT_IMPORTED:
      return {
        type: BUTTONS.TYPES.INFO,
        text: "Import",
        disabled: false,
      };

    case STATUSES.TYPES.FETCHING_EVENTS:
      return {
        type: BUTTONS.TYPES.SECONDARY,
        text: "Import",
        disabled: true,
      };

    case STATUSES.TYPES.UPGRADE:
      return {
        type: BUTTONS.TYPES.INFO,
        text: "Upgrade",
        disabled: false,
      };

    case STATUSES.TYPES.BUY:
      return {
        type: BUTTONS.TYPES.SUCCESS,
        text: "Buy",
        disabled: false,
      };

    case STATUSES.TYPES.INCOMPLETE_IMPORT:
      return {
        type: BUTTONS.TYPES.INFO,
        text: "Import",
        disabled: false,
      };

    default:
      break;
  }
};

const getSecondButton = (importedAmount, importedIgnoredAmount) => {
  let isDisabled = true;

  if (
    importedAmount >= 0 &&
    importedIgnoredAmount >= 0 &&
    (importedAmount !== 0 || importedIgnoredAmount !== 0)
  ) {
    isDisabled = false;
  }

  return {
    type: BUTTONS.TYPES.PRIMARY,
    text: "Report",
    icon: true,
    disabled: isDisabled,
  };
};

export const getButtons = (item) => {
  const { importedAmount, importedIgnoredAmount } = item;
  const statusType = getStatusType(item);

  return [
    getFirstButton(statusType),
    getSecondButton(importedAmount, importedIgnoredAmount),
  ];
};
