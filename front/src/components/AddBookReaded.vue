<template>
  <v-dialog v-model="isOpen" @click:outside="$emit('closeModal')" content-class="modal">
    <v-card>
      <v-card-title
        >Book readed<v-spacer />
        </v-card-title
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
  name: "cAddBookReaded",
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
      this.isOpen = value == "addBookReaded";
    },
  },
};
</script>
