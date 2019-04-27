<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-text-field v-model="nombres" label="Nombre"></v-text-field>
    </v-flex>
    <v-flex xs3 v-for="(item, key) in listaFavoritos" :key="key">
      <img
        :src="`https://cdn2.thecatapi.com/images/${item.image_id}.jpg`"
        style="width: 100%; height:80px"
      >
      valor: {{item.value}}
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nombres: "luis",
      listaFavoritos: []
    };
  },
  methods: {
    async getFavoritos(id) {
      const response = await axios({
        url: `https://api.thecatapi.com/v1/votes?sub_id=${id}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
        }
      });
      this.listaFavoritos = response.data;
    }
  },
  async created() {
    this.getFavoritos(this.nombres);
  },
  watch: {
    nombres(nuevo){
      this.getFavoritos(nuevo)
    }
    //model
  }
};
</script>
