export const formateCurrency = (number) => {
  return new Intl.NumberFormat().format(number);
}

export default {
  formateCurrency
}