<template>
  <v-app>
    <cNavbar/>
    <v-main>
      <HelloWorld/>
    </v-main>
    <cFooter/>
  </v-app>
</template>

<script>
import cNavbar from './components/Navbar.vue';
import cFooter from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    cNavbar,
    cFooter
  },

  data: () => ({
    //
  }),
}
</script>
