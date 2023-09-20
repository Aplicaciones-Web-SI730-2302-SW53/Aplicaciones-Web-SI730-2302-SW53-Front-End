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

  getByid(id) {
    return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  }

  create(body) {
    return axios.post("https://jsonplaceholder.typicode.com/users", body);
  }

  update(id, body) {
    return axios.put("https://jsonplaceholder.typicode.com/users/" + id, body);
  }
}

export default UseApiService;
