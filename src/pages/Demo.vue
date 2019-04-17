<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-select label="Seleccionar" :items="[1,2,3,4,5]" v-model="itemSeleccionado"></v-select>
    </v-flex>
    <v-flex xs12 class="red white--text" text-xs-center>{{nombre}}</v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      itemSeleccionado: 1,
      nombre: null
    };
  },
  methods: {
    getNombre(valor) {
      this.nombre = `render : ${valor}`;
    }
  },
  watch: {
    itemSeleccionado(nuevoValor) {
      this.getNombre(nuevoValor);  //call function to update
    }
  }
};
</script>
