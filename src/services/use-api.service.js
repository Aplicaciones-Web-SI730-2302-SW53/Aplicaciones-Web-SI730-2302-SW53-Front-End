import axios from "axios";

class UseApiService {
  getAll() {
    /*return fetch("https://jsonplaceholder.typicode.com/users")
                          .then((response) => response.json())
                          .then((json) => (this.users = json));*/

    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
}

export default UseApiService;
