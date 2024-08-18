// стоимость твара
const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  const result = quantity * price;
  console.log(result);
  return result.toLocaleString("ru-RU", { style: "currency", currency: "RUB" });
};

// для передачи текста стоимости на страницу
const ResPrice = document.getElementById("main__btn-price");
calculateTotalPrice();
console.log(ResPrice);
