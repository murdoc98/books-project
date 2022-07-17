
import authAxios from '../authAxios';
export default class PrivateAPI {
  constructor() {
    this.axios = authAxios();
  }

  async getCurrentUser() {
    const response = await this.axios.get('/currentUser');
    console.log(response.data);
    return response.data;
  }
}