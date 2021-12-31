const precioConDescuento = (precio, descuento) => precio - precio * (descuento/100);

//----------------------------------------------------------------------------------------------------
//validacion de campos
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0 || isNaN(val)) ? true : false;
}

//----------------------------------------------------------------------------------------------------
//incorporando cupones
const coupons={
    'CUPON15': 15,
    'CUPON30': 30,
    'CUPON45': 45,
}
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



const isCouponValueValid =  (value) => coupons[value] !== undefined ? true : false;

function aplicarCuponDescuento(){
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value
    const inputDiscount = document.getElementById("InputDiscount")
    inputDiscount.value = coupons.couponValue;

    console.log(couponValue, coupons.couponValue, isCouponValueValid(couponValue), coupons['CUPON30'] )

    if (!userCoupon) {
        couponAlert.innerHTML = "El cupón " + couponValue + "no es válido"
    }
    
}