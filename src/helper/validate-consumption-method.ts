const validConsumptionMethods = ["DINE_IN", "TAKEAWAY"];

export const isConsumptionMethodValid = (queryValue: string): boolean =>
  validConsumptionMethods.includes(queryValue);
