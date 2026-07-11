//calculo del precio de una cartera

let precioCosto= 235;
let ganancia= precioCosto * 0.25;
let impuesto= (precioCosto + ganancia) * 0.12;
let descuento= (precioCosto + ganancia + impuesto) * 0.10;
let precioFinal= precioCosto + ganancia + impuesto - descuento;

console.log (precioFinal);