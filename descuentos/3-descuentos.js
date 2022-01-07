const coupons = ["coupon1", "coupon2", "coupon3"];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function priceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = Number(inputPrice.value);
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch (couponValue) {
    case coupons[0]:
      descuento = 15;
      break;
    case coupons[1]:
      descuento = 30;
      break;
    case coupons[2]:
      descuento = 25;
      break;
  }

  console.log(coupons[0]);

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById("ResultPice");
  resultP.innerHTML = "El precio don descuento es: $" + precioConDescuento;
}
