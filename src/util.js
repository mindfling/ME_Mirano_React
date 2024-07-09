export const getValidFilters = (filters) => {
  const validFilters = {};
  console.log('validFilters: ', validFilters);
  for (const key in filters) {
    if (Object.hasOwnProperty.call(filters, key) && filters[key]) {
      validFilters[key] = filters[key];
    }
  }

  return validFilters;
}