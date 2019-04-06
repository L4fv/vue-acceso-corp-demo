<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <b class="orange--text">FRONTEND</b>
        <span class="font-weight-light blue--text">ACCESO</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content class="ma-4">
      <!-- star here -->       
      <v-select :items="colaboradores" item-text="name" v-model="persona"
       item-value="id" label="Lista de colaboradores" return-object></v-select>       
       <v-select :items="productos" item-text="detalle" v-model="producto"
       item-value="id" label="Lista de Productos" return-object></v-select>
       <v-select :items="[1,2,3,4,5]" v-model="unidades"></v-select>
       <v-btn dark @click="agregarItem">agregar</v-btn>
       <v-layout wrap row v-for="(item, key) in reporteDiario" 
        :key="key">
         <v-flex xs4 class="red">{{item.nombre}}</v-flex>
         <v-flex xs4 class="blue">{{item.detalle}}</v-flex>
         <v-flex xs4 class="yellow">{{item.price}}</v-flex>
       </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import { colaboradores, productos } from "./utils/db.js";
export default {
  name: "App",
   methods: {
    agregarItem(){
      this.reporteDiario.push(
        {nombre: this.persona.name,
         detalle:this.producto.detalle,
         price:this.producto.price }) }  },
  data() {
    return {
      unidades:1,
      reporteDiario: [],
      nombre: null,
      persona:{name:null},
      producto:{detalle:null},
      colaboradores: colaboradores,
      productos: productos
    };
  },
 
};
</script>
