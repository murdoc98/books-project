<template>
  <v-app>
    <cNavbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <cFooter/>
  </v-app>
</template>

<script>
import cNavbar from './components/Navbar.vue';
import cFooter from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    cNavbar,
    cFooter
  },

  data: () => ({
    //
  }),
}
</script>
