import { BUTTONS } from "./constants";

export const getButtonClass = (type) => {
  switch (type) {
    case BUTTONS.TYPES.INFO:
      return "bg-orange-500 hover:bg-orange-600";

    case BUTTONS.TYPES.DANGER:
      return "bg-red-500 hover:bg-orange-700";

    case BUTTONS.TYPES.SECONDARY:
      return "bg-blue-700 hover:bg-blue-800";

    case BUTTONS.TYPES.SUCCESS:
      return "bg-green-700 hover:bg-green-800";

    default:
      return "bg-blue-700 hover:bg-blue-800";
  }
};
