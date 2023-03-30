const sueldo_base = 2000000;
const valor_hora_extra_diurna = 8000;
const valor_hora_extra_nocturna = 10000;
const valor_hora_extra_dominical_diurno = 15000;
const valor_hora_extra_dominical_nocturno = 18000;
// Definio los valores de sueldo y horas extra
const cantidad_horas_extra_diurna = parseInt(prompt("ingrese cantidad de horas extra diurna trabajadas: "));
const cantidad_horas_extra_nocturna = parseInt(prompt("ingrese cantidad de horas extra nocturna trabajadas: "));
const cantidad_horas_extra_dominical_diurno = parseInt(prompt("Ingrese cantidad de horas extra dominical diurno trabajadas: "));
const cantidad_horas_extra_dominical_nocturno = parseInt(prompt("Ingrese cantidad de horas extra dominical nocturno trabajadas: "));
// Pedido la cantidad de horas extras trabajadas por cada tipo
let comision = 0;
if (cantidad_horas_extra_diurna > 0) {
  comision += cantidad_horas_extra_diurna * valor_hora_extra_diurna;
}
if (cantidad_horas_extra_nocturna > 0) {
  comision += cantidad_horas_extra_nocturna * valor_hora_extra_nocturna;
}
if (cantidad_horas_extra_dominical_diurno > 0) {
  comision += cantidad_horas_extra_dominical_diurno * valor_hora_extra_dominical_diurno;
}
if (cantidad_horas_extra_dominical_nocturno > 0) {
  comision += cantidad_horas_extra_dominical_nocturno * valor_hora_extra_dominical_nocturno;
}
// Calculo la comisión por horas extras
const salario_total = sueldo_base + comision;
// Calculo el salario total
console.log("El salario total del empleado es de $" + salario_total);
// Imprimo el salario total
let totalAPagarHorasExtrasDiurnas = valor_hora_extra_diurna * cantidad_horas_extra_diurna;
let totalAPagarHorasExtrasNocturnas = valor_hora_extra_nocturna * cantidad_horas_extra_nocturna;
let totalAPagarHorasExtrasDominicalesDiurnas = valor_hora_extra_dominical_diurno * cantidad_horas_extra_dominical_diurno;
let totalAPagarHorasExtrasDominicalesNocturnas = valor_hora_extra_dominical_nocturno * cantidad_horas_extra_dominical_nocturno;
// Calculo el valor a pagar por cada tipo de hora extra
let salarioTotal = sueldo_base + totalAPagarHorasExtrasDiurnas + totalAPagarHorasExtrasNocturnas + totalAPagarHorasExtrasDominicalesDiurnas + totalAPagarHorasExtrasDominicalesNocturnas
console.log('Sueldo base: '+ sueldo_base);
console.log('Horas extras diurnas: ' +cantidad_horas_extra_diurna +" Total a pagar en horas extras diurnas "+ totalAPagarHorasExtrasDiurnas);
console.log("Horas extras nocturnas: " +cantidad_horas_extra_nocturna +' Total a pagar en horas extras nocturnas '+ totalAPagarHorasExtrasNocturnas);
console.log("Horas extras dominicales diurnas:" +cantidad_horas_extra_dominical_diurno +' Total a pagar en horas dominicales diurnas '+ totalAPagarHorasExtrasDominicalesDiurnas);
console.log("Horas extras dominicales nocturnas: " +cantidad_horas_extra_dominical_nocturno + ' Total a pagar en horas dominicales nocturnas '+ totalAPagarHorasExtrasDominicalesNocturnas);
console.log("Total a pagar horas" + salarioTotal)
//imprimo los datos solicitados 