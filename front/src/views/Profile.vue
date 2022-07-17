<template>
  <v-container>
    <h1>Welcome <span class="code">{{ state.id }}</span> reader!</h1>
    <div class="content">
      <div class="content-title">
        <h2>Books to read</h2>
        <v-btn @click="currentModal = 'addBookToRead'" icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
        <span class="clear"></span>
      </div>
      <div class="content-body">
        <p v-if="state.books_to_read.length == 0" class="non-content">
          You don't have books to read!
        </p>
        <div v-else>Show books to read</div>
      </div>
    </div>
    <div class="content">
      <div class="content-title">
        <h2>Books readed</h2>
        <v-btn @click="currentModal = 'addBookReaded'" icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
        <span class="clear"></span>
      </div>
      <div class="content-body">
        <p v-if="state.books_readed.length == 0" class="non-content">
          You don't have books readed!
        </p>
        <div v-else>Show books to read</div>
      </div>
    </div>
    <AddBookToRead
      :currentModal="currentModal"
      @closeModal="closeModal"
    ></AddBookToRead>
    <AddBookReaded
      :currentModal="currentModal"
      @closeModal="closeModal"
    ></AddBookReaded>
  </v-container>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import PrivateAPI from "../services/privateAPI.service";

// Components
import AddBookReaded from "../components/AddBookReaded.vue";
import AddBookToRead from '../components/AddBookToRead.vue';

export default {
  name: "cProfile",
  components: {
    AddBookToRead,
    AddBookReaded,
  },
  methods: {
    closeModal() {
      this.currentModal = 'disabled';
    },
  },
  setup() {
    const privateAPI = new PrivateAPI();
    const currentModal = ref("disabled");
    const state = reactive({
      id: undefined,
      books_to_read: [],
      books_readed: [],
    });
    onMounted(async () => {
      const { _id, books_readed, books_to_read } =
        await privateAPI.getCurrentUser();
      state.id = _id;
      state.books_to_read = books_to_read;
      state.books_readed = books_readed;
    });
    return {
      state,
      currentModal,
    };
  },
};
</script>
<style>
.content {
  background: #f8f8f8;
  border-radius: 6px;
  padding: 10px 20px;
  margin-top: 20px;
}
.content .content-title {
  padding: 10px 5px;
  border-bottom: 1px solid #c0c0c0;
}
.content .content-title .v-btn {
  background: none;
  color: #a80000;
  box-shadow: none;
  margin-top: -8px;
}
.non-content {
  text-align: center;
  padding: 50px 0;
  font-style: italic;
}
.content .content-title .v-btn {
  float: right;
}
.content .content-title h2 {
  float: left;
}
span.clear {
  clear: left;
  display: block;
}
span.code {
  font-family: monospace;
}
</style>
