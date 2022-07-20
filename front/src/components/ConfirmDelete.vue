<template>
  <v-dialog
    v-model="isOpen"
    @click:outside="$emit('closeModal')"
    content-class="modal"
  >
    <v-card id="form">
      <v-card-title>Delete item<v-spacer /></v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <h2 style="text-align: center;">{{book.name}} will be deleted definetely, are you sure?</h2>
             <v-img
          :src="require('../assets/books2.png')"
          class="my-3"
          contain
          height="350"
        />
            <v-btn @click="deleteB()" block class="colored-solid search">
              Confirm&nbsp;
              <v-icon> mdi-delete-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { ref, toRefs, reactive } from "vue";
import PrivateAPI from '../services/privateAPI.service';
export default {
  name: "cConfirmDelete",
  props: {
    currentModal: { type: String, required: false },
    selectedBook: { type: Object, required: true }
  },
  setup(props, { emit }) {
    const { currentModal: modal, selectedBook: book } = toRefs(props);
    const privateAPI = new PrivateAPI();
    const isOpen = ref(false);
    const state = reactive({
      response: [],
    });
    const deleteBTR = async (item) => {
      await privateAPI.deleteBTR(item);
    };
    const deleteBR = async(item) => {
      await privateAPI.deleteBR(item);
    }
    const deleteB = async() => {
      if(!book.value.publisher)
        await deleteBTR(book.value);
      else
        await deleteBR(book.value);
      emit('reloadUser');
      emit('closeModal');
    }
    return {
      isOpen,
      modal,
      state,
      deleteB, 
      book
    };
  },
  watch: {
    modal(value) {
      this.isOpen = value == "confirmDelete";
    },
  },
};
</script>
