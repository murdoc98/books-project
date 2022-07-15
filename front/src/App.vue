<template>
  <v-app>
    <CustomNavbar/>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import CustomNavbar from './components/CustomNavbar.vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    CustomNavbar
  },

  data: () => ({
    //
  }),
}
</script>
