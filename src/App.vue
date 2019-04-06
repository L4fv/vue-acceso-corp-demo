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
      <v-text-field label="Nombre" v-model="nombre"></v-text-field>      
      <v-select :items="colaboradores" item-text="name" v-model="persona"
       item-value="id" label="Lista de colaboradores" return-object></v-select>       
       <v-select :items="productos" item-text="detalle" v-model="producto"
       item-value="id" label="Lista de Productos" return-object></v-select>
       <v-btn dark @click="agregarItem">agregar</v-btn>
       {{reporteDiario}}
    </v-content>
  </v-app>
</template>

<script>
import { colaboradores, productos } from "./utils/db.js";
export default {
  name: "App",
   methods: {
    agregarItem(){
      this.reporteDiario.push("hola")
    }
    // funciones
  },
  data() {
    return {
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
