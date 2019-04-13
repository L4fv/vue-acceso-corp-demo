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
      <v-select
        :items="listaProductos"
        v-model="producto"
        item-text="no_produc"
        item-value="co_produc"
        label="Seleccionar Producto"        
      ></v-select>
    </v-flex>
    <v-flex xs12>
      <v-select :items="[1,2,3,4,5]" label="unidades" v-model="cantidad"></v-select>
    </v-flex>
    {{nombre}} {{producto}} {{cantidad}}
    <v-btn @click="addReservar">Reservar</v-btn>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      listaProductos: [],
      nombre: null,
      cantidad: null,
      producto: null
    };
  },
  methods:{
   async addReservar(){
      const respuesta = await axios({
        url: "http://sd1.accesocrediticio.com:7000/orq/acceso/v1.0/postReservas", //url
        method: "POST", //get post
        data: {
          codigoProducto: this.producto ,
          nombre: this.nombre,
          cantidad:this.cantidad 
        } // parametros
      });
      console.log(respuesta.data)
    }
  },
  async created() {
    const respuesta = await axios({
      url: "http://sd1.accesocrediticio.com:7000/orq/acceso/v1.0/getProductos", //url
      method: "GET" //get post
    });
    this.listaProductos = respuesta.data.resultado;
  }
};
</script>
