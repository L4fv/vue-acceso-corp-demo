<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <b class="orange--text">FRONTEND</b>
        <span class="font-weight-light blue--text">ACCESO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>        
        <v-btn flat to="/">HOME</v-btn>
        <v-btn flat to="/admin">admin</v-btn>
        <v-btn flat to="/reservas">Reservas</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
