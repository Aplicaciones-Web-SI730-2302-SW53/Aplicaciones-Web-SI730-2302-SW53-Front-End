import axios from "axios";

class UseApiService {
  getAll() {
    /*return fetch("https://jsonplaceholder.typicode.com/users")
                                      .then((response) => response.json())
                                      .then((json) => (this.users = json));*/

    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  getByRange(start, limit) {
    /*return fetch("https://jsonplaceholder.typicode.com/users")
                                      .then((response) => response.json())
                                      .then((json) => (this.users = json));*/

    return axios.get(
      "https://jsonplaceholder.typicode.com/users?_start=" +
        start +
        "&_limit=" +
        limit,
    );
  }
}

export default UseApiService;
