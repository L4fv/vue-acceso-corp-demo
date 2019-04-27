<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-select
        :items="catalogoCategories"
        item-text="name"
        item-value="id"
        v-model="categoria"
        label="Seleccionar categoria"
      ></v-select>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="cantidad" 
      label="cantidad"></v-text-field>
    </v-flex>
    <v-flex xs3 v-for="(item, key) in listaCat" :key="key" pa-2>
      <img :src="item.url" style="width: 100%; height:80px">
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categoria: 2,
      listaCat: [],
      catalogoCategories: [
        {
          id: 5,
          name: "boxes"
        },
        {
          id: 6,
          name: "caturday"
        },
        {
          id: 15,
          name: "clothes"
        },
        {
          id: 9,
          name: "dream"
        },
        {
          id: 3,
          name: "funny"
        },
        {
          id: 1,
          name: "hats"
        },
        {
          id: 10,
          name: "kittens"
        },
        {
          id: 14,
          name: "sinks"
        },
        {
          id: 2,
          name: "space"
        },
        {
          id: 4,
          name: "sunglasses"
        },
        {
          id: 7,
          name: "ties"
        }
      ]
    };
  },
  methods: {
    async myFunction(value) {
      const response = await axios({
        url: `https://api.thecatapi.com/v1/images/search?limit=3&category_ids=${value}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
        }
      });
      this.listaCat = response.data;
    }
  },
  async created() {
    this.myFunction(this.categoria);
  },
  watch: {
    categoria(nuevo, viejo) {
      console.log("viejo: " + viejo + "nuevo " + nuevo);
      this.myFunction(nuevo);
    }
    //model
  }
};
</script>
