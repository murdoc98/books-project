<template>
  <v-dialog v-model="isOpen" @click:outside="$emit('closeModal')">
    <v-card>
      <v-card-title
        >Book to read<v-spacer />
        <v-btn @click="$emit('closeModal')">
          Cancelar&nbsp;
          <v-icon> mdi-close-circle-outline </v-icon>
        </v-btn></v-card-title
      >
      <v-form ref="form" lazy-validation>
        <v-row> </v-row>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="custom-button" id="update">
          Guardar&nbsp;
          <v-icon> mdi-arrow-down-thin-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { ref, toRefs } from "vue";
export default {
  name: "cAddBookToRead",
  props: {
    currentModal: { type: String, required: false }
  },
  setup(props) {
    const isOpen = ref(false);
    const { currentModal: modal } = toRefs(props);
    return {
      isOpen,
      modal
    };
  },
  watch: {
    modal(value) {
      this.isOpen = value == "addBookToRead";
    },
  },
};
</script>
