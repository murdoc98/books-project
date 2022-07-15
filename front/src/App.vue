<template>
<div>
    <img alt="Vue logo" src="./assets/logo.png">
  <button @click="loginWithRedirect">Log in</button>
  <button @click="logout">Log out</button>
  {{isAuthenticated}}
</div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: 'App',
  components: {},
  setup() {
      const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
      return { 
        // Data
        isAuthenticated,
        // Methods
        loginWithRedirect,
        logout
       };
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
