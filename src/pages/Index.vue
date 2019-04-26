<template>
  <v-layout wrap row>
    <v-flex xs12>INDEX</v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    async myFunction() {
      const response = await axios({
        url: `https://api.thecatapi.com/v1/images/search?limit=3&category_ids=3`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
        }
      });
    }
  },
  async created() {}
};
</script>
