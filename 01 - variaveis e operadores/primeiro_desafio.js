//Calcular o gasto de combustível em uma viagem 

const preco_combustivel = 5.79;
const km_litros = 10;
let distancia_km = 100;

const gasto_viagem = (distancia_km / km_litros) * preco_combustivel;

console.log(gasto_viagem.toFixed(2));
