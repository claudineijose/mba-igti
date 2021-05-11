const faixaIMC = [
    {
        de: 0,
        ate: 16.9,
        resultado: "Muito abaixo do peso"
    },
    {
        de: 17,
        ate: 18.4,
        resultado: "Abaixo do peso"
    },
    {
        de: 18.5,
        ate: 24.9,
        resultado: "Peso normal"
    },
    {
        de: 25,
        ate: 29.9,
        resultado: "Acima do peso"
    },
    {
        de: 30,
        ate: 34.9,
        resultado: "Obesidade grau I"
    },
    {
        de: 35,
        ate: 40,
        resultado: "Obesidade grau II"
    },
    {
        de: 40.1,
        ate: Number.MAX_VALUE,
        resultado: "Obesidade grau II"
    }
]
export class IMC{
    constructor(peso, altura){
        this._peso = peso;
        this._altura = altura;
    }

    _calcular(){
        if (this._peso && this._altura && this._peso > 0 && this._altura > 0)
            this._imc = this._peso / (this._altura * this._altura);
        else 
            this._imc = null;
    }

    _getIMC(){
        if (this._imc)
            return this._imc.toFixed(1);
    }

    _getDescricao(){
        let imc = _getIMC();
        if (imc)
            return faixaIMC.find(f => f.de >= imc && f.ate <= imc).resultado;
        else
            return "Preencher os dados para Calcular o IMC.";
    }
}