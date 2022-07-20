<template>
  <v-container>
    <h1>Welcome reader #{{ state.id }}</h1>
    <v-row>
      <v-col cols="9">
        <div class="content">
          <div class="content-title">
            <h2>Readed</h2>
            <v-btn @click="currentModal = 'addBookReaded'" class="colored-outline" icon>
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            <span class="clear"></span>
          </div>
          <div class="content-body">
            <p v-if="state.books_readed.length == 0" class="non-content">
              You don't have books readed!
            </p>
            <div v-else>
              <v-row>
                <v-col cols='6' v-for="item in state.books_readed" :key="item.id">
                  <v-card >
                <v-card-text>
                  <div>Rating: {{item.score}}/5</div>
                  <p class="text-h4 text--primary">{{item.name}}</p>
                  <p><b>Publisher: </b>{{item.publisher}}, <b>publish year: </b>{{item.publishYear}}, <b>total pages: </b>{{item.totalPages}}</p>
                  <p><b>Start date: </b>{{new Date(item.startDate).toLocaleDateString("en-US")}}, <b>end date: </b>{{new Date(item.endDate).toLocaleDateString("en-US")}}</p>
                  <div class="text--primary">
                    <b>Review: </b>{{item.review}}
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="currentModal = 'confirmDelete'; state.selectedBook=item" class="colored-outline" icon>
                        <v-icon> mdi-delete-circle-outline</v-icon>
                      </v-btn>
                    <v-btn @click="currentModal = 'editBookReaded'; state.selectedBook=item" class="colored-outline" icon>
                        <v-icon> mdi-update</v-icon>
                      </v-btn>
                </v-card-actions>
              </v-card>
                </v-col>
              </v-row>
            </div>
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
            <p class="custom-label"><b>Books readed: </b>{{state.books_readed.length}}</p>
            <p class="custom-label"><b>Books to read: </b>{{state.books_to_read.length}}</p>
            <p class="custom-label"><b>Av. rating: </b>{{state.rating}}</p>
            <p class="custom-label"><b>Pages read: </b>{{state.pages_read}}</p>
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            <h2>To read</h2>
            <v-btn @click="currentModal = 'addBookToRead'" class="colored-outline" icon>
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
                    <td style="width: 70%" class="text-center">{{ item.name }}</td>
                    <td class="text-center">
                      <v-btn @click="currentModal = 'confirmDelete'; state.selectedBook=item" class="colored-outline" icon>
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
    <EditBookReaded
      :currentModal="currentModal"
      :selectedBook="state.selectedBook"
      @closeModal="closeModal"
      @reloadUser="reloadUser"
    ></EditBookReaded>
    <ConfirmDelete
      :currentModal="currentModal"
      :selectedBook="state.selectedBook"
      @closeModal="closeModal"
      @reloadUser="reloadUser"
    ></ConfirmDelete>
  </v-container>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import PrivateAPI from "../services/privateAPI.service";

// Components
import AddBookReaded from "../components/AddBookReaded.vue";
import AddBookToRead from "../components/AddBookToRead.vue";
import EditBookReaded from "../components/EditBookReaded.vue";
import ConfirmDelete from '../components/ConfirmDelete.vue';

export default {
  name: "cProfile",
  components: {
    AddBookToRead,
    AddBookReaded,
    EditBookReaded,
    ConfirmDelete
  },
  methods: {
    closeModal() {
      this.currentModal = "disabled";
    },
  },
  setup() {
    const privateAPI = new PrivateAPI();
    const currentModal = ref("disabled");
    const reloadUser = async () => {
      const { _id, books_readed, books_to_read } =
        await privateAPI.getCurrentUser();
      state.id = _id.substr(_id.length - 5);
      state.books_to_read = books_to_read;
      state.books_readed = books_readed;
      if(books_readed.lenght == 0) state.rating = 0;
      else state.rating = (books_readed.reduce((a, b) => a + b.score, 0) / books_readed.length).toFixed(1);
      state.pages_read = books_readed.reduce((a, b) => a + parseInt(b.totalPages), 0);

    };
    const state = reactive({
      id: undefined,
      books_to_read: [],
      books_readed: [],
      rating: 0,
      pages_read: 0,
      selectedBook: {}
    });
    onMounted(async () => {
      await reloadUser();
    });
    return {
      state,
      currentModal,
      reloadUser,
    };
  },
};
</script>
