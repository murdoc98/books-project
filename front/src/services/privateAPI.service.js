
import authAxios from '../authAxios';
export default class PrivateAPI {
  constructor() {
    this.axios = authAxios();
  }

  async getCurrentUser() {
    console.log(this.axios.defaults.baseURL);
    const response = await this.axios.get('/currentUser');
    return response;
  }
}