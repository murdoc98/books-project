
import authAxios from '../authAxios';
export default class PrivateAPI {
  constructor() {
    this.axios = authAxios();
  }

  async getCurrentUser() {
    const response = await this.axios.get('/currentUser');
    return response.data;
  }
  async postBTR(book) {
    console.log(book);
    const response = await this.axios.post('/bookToRead', book);
    return response.data;
  }
  async deleteBTR(book) {
    const response = await this.axios.delete(`/bookToRead/${book._id}`);
    return response.data;
  }
  async postBR(book) {
    const response = await this.axios.post('/bookreaded', book);
    return response.data;
  }
  async deleteBR(book) {
    const response = await this.axios.delete(`/bookreaded/${book._id}`);
    return response.data;
  }
  async putBR(book) {
    const response = await this.axios.put(`/bookreaded/${book._id}`, book);
    return response.data;
  }
}