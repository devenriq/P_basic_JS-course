function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function priceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = Number(inputPrice.value);
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = Number(inputDiscount.value);
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const resultP = document.getElementById("ResultPice");
  resultP.innerHTML = "El precio don descuento es: $" + precioConDescuento;
}
