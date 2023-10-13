//Calcular o gasto de combustível em uma viagem baseado no tipo de combustível do veículo

const preco_etanol = 5.79;
const preco_gasolina = 6.66;
const km_litros = 10;
const distancia_km = 100;
const tipo_combustivel = 'Gasolina';

if (tipo_combustivel === 'Etanol') {
    const gasto_viagem = (distancia_km / km_litros) * preco_etanol;
    console.log(gasto_viagem.toFixed(2));
} else {
    const gasto_viagem = (distancia_km / km_litros) * preco_gasolina;
    console.log(gasto_viagem.toFixed(2));
}
