<template>
  <div id="app">
    <div class="container">
        <div class="card-panel">
          <p class="row">Calcule o seu IMC: </p>
        </div>
        <div>
          <div>
            <input-label label="Digite o seu Peso (Kg):" id="peso" :onInputChange="atualizarPeso"> </input-label>
          </div>
          <div>
            <input-label label="Digite o sua Altura (metros):" id="altura" :onInputChange="atualizarAltura"> </input-label>
          </div>
        </div>
        <div class="card-panel">
          <span id="resultado">Favor preencher o seu PESO e ALTURA para calcular o IMC.</span>
        </div>
      </div>
  </div>
</template>

<script>
import InputLabel from './components/shared/InputLabel.vue';
import {IMC} from './classes/IMC.js';

export default {
  components: { InputLabel },
  name: 'app',
  data () {
    return {
      imc: new IMC(0, 0),
      peso: 0,
      altura: 0,
    }
  },
  methods:{
    atualizarPeso: function(event){
      this.imc = new IMC(+event.target.value, this.altura);
      this.peso = +event.target.value;
      this.calcularIMC();
    },
    atualizarAltura: function(event){
      this.imc = new IMC(this.peso, +event.target.value)
      this.altura = +event.target.value;
      this.calcularIMC();
    },
    calcularIMC: function() {
      const res = this.$el.querySelector('#resultado');
      res.textContent = this.imc._getIMC();
    }
  }
}
</script>

