<template>
  <v-container>
    <h1>Welcome reader #{{ state.id }}</h1>
    <v-row>
      <v-col cols="9">
        <div class="content">
          <div class="content-title">
            <h2>Readed</h2>
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
      </v-col>
      <v-col cols="3">
        <div class="content">
          <div class="content-title">
            <h2>My stats</h2>
            <span class="clear"></span>
          </div>
          <div class="content-body">
            <p v-if="state.books_readed.length == 0" class="non-content">
              You don't have books readed!
            </p>
            <div v-else>Show books to read</div>
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            <h2>To read</h2>
            <v-btn @click="currentModal = 'addBookToRead'" icon>
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            <span class="clear"></span>
          </div>
          <div class="content-body">
            <p v-if="state.books_to_read.length == 0" class="non-content">
              You don't have books to read!
            </p>
            <div v-else>
              <v-table class="content-table">
                <thead>
                  <tr>
                    <th class="text-center">Title</th>
                    <th class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in state.books_to_read" :key="item.name">
                    <td style="width: 70%">{{ item.name }}</td>
                    <td class="text-center">
                      <v-btn @click="deleteBTR(item)" icon>
                        <v-icon> mdi-delete-circle-outline</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <AddBookToRead
      :currentModal="currentModal"
      @closeModal="closeModal"
      @reloadUser="reloadUser"
    ></AddBookToRead>
    <AddBookReaded
      :currentModal="currentModal"
      @closeModal="closeModal"
      @reloadUser="reloadUser"
    ></AddBookReaded>
  </v-container>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import PrivateAPI from "../services/privateAPI.service";

// Components
import AddBookReaded from "../components/AddBookReaded.vue";
import AddBookToRead from "../components/AddBookToRead.vue";

export default {
  name: "cProfile",
  components: {
    AddBookToRead,
    AddBookReaded,
  },
  methods: {
    closeModal() {
      this.currentModal = "disabled";
    },
  },
  setup() {
    const privateAPI = new PrivateAPI();
    const currentModal = ref("disabled");
    const deleteBTR = async (item) => {
      const response = await privateAPI.deleteBTR(item)
      console.log(response);
      await reloadUser();
    };
    const reloadUser = async() => {
      const { _id, books_readed, books_to_read } = await privateAPI.getCurrentUser();
      state.id = _id.substr(_id.length - 5);
      state.books_to_read = books_to_read;
      state.books_readed = books_readed;
    };
    const state = reactive({
      id: undefined,
      books_to_read: [],
      books_readed: [],
    });
    onMounted(async () => {
      await reloadUser();
    });
    return {
      state,
      currentModal,
      deleteBTR,
      reloadUser
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
.content-table {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.content-table .v-btn {
  background: none;
  color: #a80000;
  box-shadow: none;
}
.content-table tr:hover {
  background-color: transparent !important;
}
</style>
