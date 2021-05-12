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

        console.log(this._peso)
        console.log(this._altura)
        console.log(this._imc)
        
    }

    _getIMC(){
        this._calcular();
        if (this._imc){
           return this._getDescricao(this._imc.toFixed(1)) 
        }
        else{
            if (!this._peso && !this._altura)
                return "Favor preencher o seu PESO e ALTURA para calcular o IMC.";
            else if (!this._peso)
                return "Favor preencher o seu PESO em Kg para calcular o IMC.";
            else if(!this._altura)
                return "Favor preencher a sua ALTURA em metros para calcular o IMC.";
        }

    }

    _getDescricao(imc){
        if (imc){
           let resultado = "";
           if (imc > 0 && imc <= 16.9){
             resultado = "Muito abaixo do peso";
           }
           else if (imc > 17 && imc <= 18.4){
            resultado = "Abaixo do peso";
           }
           else if (imc > 18.5 && imc <= 24.9){
            resultado = "Peso normal";
           }
           else if (imc > 25 && imc <= 29.9){
            resultado = "Acima do peso";
           }
           else if (imc > 30 && imc <= 34.9){
            resultado = "Obesidade grau I";
           } 
           else if (imc > 35 && imc <= 40){
            resultado = "Obesidade grau II";
           }
           else if (imc > 40.1){
            resultado = "Obesidade grau III";
           }
           return `O seu IMC é ${imc} ${resultado ? " - " + resultado : ""}`;
        }            
    }
}