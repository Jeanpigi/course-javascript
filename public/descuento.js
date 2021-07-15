
const calcularPrecioDescuentoPrecio = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const calcularPrecioDescuento = () => {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;

    const precioConDescuentoTotal = calcularPrecioDescuentoPrecio(priceValue, discountValue);

    const result = document.querySelector('.precio-descuento');
    result.innerText = "El precio con descuento es: " + precioConDescuentoTotal;

}