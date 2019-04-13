<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-text-field  v-model="producto" label="Nombre Producto"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="precio" label="Precio Producto"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="stock" label="stock Producto"></v-text-field>
    </v-flex>
    {{producto}} {{precio}} {{stock}}
    <v-btn @click="agregarProductos">Agregar productos</v-btn>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      producto: null,
      precio: null,
      stock: null
    };
  },
  methods: {
    async agregarProductos() {
        console.log("hola")
      const respuesta = await axios({
        url: "http://sd1.accesocrediticio.com:7000/orq/acceso/v1.0/postProductos", //url
        method: "POST", //get post
        data: {
          nombreProducto: this.producto,
          precioProducto: this.precio,
          stockProducto: this.stock
        } // parametros
      });
      console.log(respuesta.data)
    }
  }
};
</script>
