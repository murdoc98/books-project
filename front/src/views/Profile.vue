<template>
  <v-container>
    <h1>Welcome reader!</h1>
  </v-container>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import PrivateAPI from "../services/privateAPI.service";

export default {
  name: "cProfile",
  setup() {
    const privateAPI = new PrivateAPI();
    onMounted(async () => {
      const test = await privateAPI.getCurrentUser();
      console.log(test);
    });
  },
};
</script>
