const {gets, print} = require('./ex03_funcoes_auxiliares');

const salario_bruto = gets();
const adicional = gets();

function calcPerc(sal) {
    if (sal >= 0 && sal <= 1100) {
        return  (5 / 100) * sal;
    } else if (sal <= 2500) {
        return  (10/ 100) * sal;
    } else {
        return (15 / 100) * sal;
    }
} 

const valor_imposto = calcPerc(salario_bruto);
const valor_final = salario_bruto - valor_imposto + adicional ;
print(valor_final);

//print(`${salario}, ${adicional}`)