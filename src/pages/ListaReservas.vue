<template>
  <v-layout wrap row>
    <h2>Mis Reservas</h2>
<!--     {{listaReservas}} -->
    <v-flex xs12 v-for="item in listaReservas">
        <h2>{{item.no_nombre}} -- {{item.no_produc}} -- {{item.ca_unidad}}</h2>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        listaReservas: []
    };
  },
  async created() {
    const respuesta = await axios({
      url: "http://sd1.accesocrediticio.com:7000/orq/acceso/v1.0/getReservas", //url
      method: "GET", //get post
    });
    this.listaReservas = respuesta.data.resultado
    console.log();
  }
};
</script>
