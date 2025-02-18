export const formatCurrency = (value: number) => {
  return value.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
};
