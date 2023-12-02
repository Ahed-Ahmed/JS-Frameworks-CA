export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  const unique = data.map((item) => item[type]);

  return ["all", ...new Set(unique)];
};
export const getCategory = (data) => {
  const category = data.map((item) => {
    const { tags } = item;
    return tags[0].toString();
  });
  return ["all", ...new Set(category)];
};
