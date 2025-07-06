export const formatCurrency = (value?: number) => {
  if (typeof value !== "number" || isNaN(value)) return "";
  return value.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
};
