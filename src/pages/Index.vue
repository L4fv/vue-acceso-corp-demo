<template>
  <v-layout wrap row>
    <!-- here -->
    <v-flex xs12>
      <h1>Agregar Reserva</h1>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="nombre" label="Nombre Cliente"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-select :items="items" label="Seleccionar Producto"></v-select>
    </v-flex>
    <v-flex xs12>
      <v-select :items="[1,2,3,4,5]" label="unidades"></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        listaProductos: []
    };
  },
  async created() {
    const respuesta = await axios({
      url: "http://sd1.accesocrediticio.com:7000/orq/acceso/v1.0/getProductos", //url
      method: "GET", //get post
    });
    this.listaProductos = respuesta.data.resultado
    console.log();
  }
};
</script>
