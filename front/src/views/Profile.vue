<template>
  <v-container>
    <h1>Welcome {{ state.id }} reader!</h1>
    <h2>Book to read</h2>
    <h2>Books readed</h2>
  </v-container>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import { reactive } from "vue";
import PrivateAPI from "../services/privateAPI.service";

export default {
  name: "cProfile",
  setup() {
    const privateAPI = new PrivateAPI();
    const state = reactive({
      id: undefined
    });
    onMounted(async () => {
      const { id } = await privateAPI.getCurrentUser();
      state.id = id;
    });
    return {
      state
    }
  },
};
</script>
