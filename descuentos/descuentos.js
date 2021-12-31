const precioConDescuento = (precio, descuento) => precio - precio * (descuento/100);

//----------------------------------------------------------------------------------------------------
//validacion de campos
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0 || isNaN(val)) ? true : false;
}

//----------------------------------------------------------------------------------------------------
//incorporando cupones
const listaCupones = {
    cupon1: 10,
    cupon2: 15,
    cupon3: 20,
 }; 
// Interaccion con HTML y cáclulo 

function calcularPrecioConDescuento(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = parseFloat(inputPrice.value)
    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = parseFloat(inputDiscount.value)
    if (isEmpty(priceValue) || isEmpty(discountValue)) {
        alert("Debe ingresar precio y porcentaje de descuento");
} else {
    resultadoDescuento.innerHTML = 
    "Al precio de "+priceValue.toFixed(2)+" menos un "+discountValue+"% de descuento<br>"+
    "arroja un precio final de: "+ precioConDescuento(priceValue, discountValue).toFixed(2);}
}


function descuentoDelCupon() {
    const nombreCupon = document.getElementById("InputCoupon").value
    const cuponDefault = 0;
    const cuponDescuento = listaCupones[nombreCupon] || cuponDefault;
    const inputDiscount = document.getElementById("InputDiscount")
    inputDiscount.value = cuponDescuento
    if (cuponDescuento == 0){
        alert("Ups... el cupon ingresado no tiene descuento")
    } else {
        alert("Felicitaciones tienes un descuento de "+cuponDescuento+"%")
    }
 } 

 // cuando se ingresa descuento manual se debe borrar el cupon ingresado ya que no aplica cupon automatico 
 function cleanCoupon(){
    const inputCoupon = document.getElementById("InputCoupon")
    inputCoupon.value = ""
 }