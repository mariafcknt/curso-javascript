class Carro {
    marca;
    cor;
    gasto_medio_km;

    constructor(marca, cor, gasto_medio){
        this.marca = marca;
        this.cor = cor;
        this.gasto_medio_km = gasto_medio;
    }

    calcularValorGasto(distancia, preco_combustivel) {
        return distancia * this.gasto_medio_km * preco_combustivel;
    }
}

const c1 = new Carro('Fiat', 'Vermelho', 1/12)
console.log(c1.calcularValorGasto(70, 5))

