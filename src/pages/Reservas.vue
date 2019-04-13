<template>
  <v-layout wrap row>
    <h2>mis productos</h2>
    
    <v-flex xs12 v-for="item in listaProductos">
        <h2>{{item.no_produc}} -- {{item.im_produc}} -- {{item.ca_stocks}}</h2>
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
