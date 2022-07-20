<template>
  <v-app-bar dense>
    <v-toolbar-title
      ><router-link :to="`/`">Book's project</router-link></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn class="ma-2 white--text" @click="login" v-if="!isAuthenticated">
      <v-icon right dark> mdi-login </v-icon>
      &nbsp;Login
    </v-btn>
    <v-btn class="ma-2 white--text" :to="`/protected`" v-if="isAuthenticated">
      <v-icon right dark> mdi-account-circle-outline </v-icon>
      &nbsp;Profile
    </v-btn>
    <v-btn class="ma-2 white--text" @click="clogout" v-if="isAuthenticated">
      <v-icon right dark> mdi-logout </v-icon>
      &nbsp;Logout
    </v-btn>
  </v-app-bar>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "cNavbar",
  components: {},
  setup() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    function login() {
      return loginWithRedirect({
        appState: {
          target: "/protected",
        },
      });
    }
    function clogout() {
      return logout({returnTo: window.location.origin})
    }
    return {
      // Data
      isAuthenticated,
      // Methods
      login,
      clogout,
    };
  },
};
</script>
