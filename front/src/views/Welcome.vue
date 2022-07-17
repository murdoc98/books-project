<template>
  <v-container id="welcome">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/books1.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Book's project
        </h1>


        <p class="subheading font-weight-regular">
          This is a technical test developed, developed to <a
            href="https://fpalpha.com/"
            target="_blank"
          >FP Alpha</a>
          <br>If you want more info about the implementation reach me at
          <a
            href="https://github.com/murdoc98"
            target="_blank"
          >Github</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'cWelcome',
  data: () => ({}),
}
</script>
<style>
#welcome {
  height: 100%;
  position: relative;
}
#welcome .v-row {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>>