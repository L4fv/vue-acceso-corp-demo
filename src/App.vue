<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <b class="orange--text">FRONTEND</b>
        <span class="font-weight-light blue--text">ACCESO</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <!-- star here -->
    </v-content>
  </v-app>
</template>

<script>
import { colaboradores, productos } from "./utils/db.js";
export default {
  name: "App",
  data() {
    return {
      // campos y datos
      colaboradores: colaboradores,
      productos: productos
    };
  },
  methods: { 
    // funciones
  }
};
</script>
