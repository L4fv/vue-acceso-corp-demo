<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-text-field label="Nombre Producto" ></v-text-field>
    </v-flex>
       <v-flex xs12>
      <v-text-field label="Precio Producto"></v-text-field>
    </v-flex>
       <v-flex xs12>
      <v-text-field label="stock Producto"></v-text-field>
    </v-flex>
    <v-btn >Agregar productos</v-btn>
  </v-layout>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
