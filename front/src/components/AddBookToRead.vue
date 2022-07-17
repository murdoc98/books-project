<template>
  <v-dialog v-model="isOpen" @click:outside="$emit('closeModal')"
  content-class="modal">
    <v-card id="form">
      <v-card-title>Book to read<v-spacer /></v-card-title>
      <v-form ref="form" lazy-validation>
        <v-row>
          <v-col cols="9">
            <v-text-field
              label="Name of the book"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
           <v-btn>
          Search&nbsp;
          <v-icon> mdi-search-web</v-icon>
        </v-btn>
          </v-col>
           </v-row>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>
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
    currentModal: { type: String, required: false },
  },
  setup(props) {
    const isOpen = ref(false);
    const { currentModal: modal } = toRefs(props);
    return {
      isOpen,
      modal,
    };
  },
  watch: {
    modal(value) {
      this.isOpen = value == "addBookToRead";
    },
  },
};
</script>
<style>
.modal {
  width: 30%;
}
.modal .v-card {
  margin-top: -20%;
}
.modal .v-card-title {
  background: #730000;
  color: white;
}
.modal .v-form {
  padding: 20px;
}
.modal .v-btn {
  background: #730000;
  color: white;
}
.v-col .v-btn {
  margin-top: 10px;
}
</style>
