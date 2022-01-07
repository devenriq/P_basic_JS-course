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

  if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + " no es válido");
  } else if (couponValue === "coupon1") {
    descuento = 15;
  } else if (couponValue === "coupon2") {
    descuento = 30;
  } else if (couponValue === "coupon3") {
    descuento = 25;
  }

  console.log(coupons[0]);

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById("ResultPice");
  resultP.innerHTML = "El precio don descuento es: $" + precioConDescuento;
}
