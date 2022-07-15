<template>
  <div>
    <v-app-bar dense>
      <v-toolbar-title>Book's project</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        :loading="loading3"
        :disabled="loading3"
        class="ma-2 white--text"
        @click="loginWithRedirect"
        v-if="!isAuthenticated"
      >
        <v-icon right dark> mdi-login </v-icon>
        &nbsp;Login
      </v-btn>
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        class="ma-2 white--text"
        @click="logout"
        v-if="isAuthenticated"
      >
        <v-icon right dark> mdi-logout </v-icon>
        &nbsp;Logout
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "CustomNavbar",
  components: {},
  setup() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return {
      // Data
      isAuthenticated,
      // Methods
      loginWithRedirect,
      logout,
    };
  },
};
</script>
<style>
.v-toolbar {
  background: #730000 !important;
}
.v-toolbar__content {
  padding: 5%;
  color: white;
  font-weight: bolder;
}
</style>
