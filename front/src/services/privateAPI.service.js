
import authAxios from '../authAxios';
export default class PrivateAPI {
  constructor() {
    this.axios = authAxios();
  }

  async getCurrentUser() {
    const response = await this.axios.get('/currentUser');
    return response.data;
  }
}