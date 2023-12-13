class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura) 
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc < 25) { 
            return ('Peso normal');
        } else if (imc < 30) { 
            return ('Acima do peso');
        } else if (imc < 40) { 
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const p1 = new Pessoa('Ana', 65, 1.69)
console.log(p1.calcularImc())
console.log(p1.classificarImc())