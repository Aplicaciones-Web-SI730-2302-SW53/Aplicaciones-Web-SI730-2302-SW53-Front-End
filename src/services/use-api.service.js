import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/640",
  headers: {
    Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
  },
});

class UseApiService {
  getAll() {
    /*return fetch("https://jsonplaceholder.typicode.com/users")
                                                                                                                                                              .then((response) => response.json())
                                                                                                                                                              .then((json) => (this.users = json));*/

    return http.get("users");
  }

  getByRange(start, limit) {
    /*return fetch("https://jsonplaceholder.typicode.com/users")
                                                                                                                                                              .then((response) => response.json())
                                                                                                                                                              .then((json) => (this.users = json));*/

    return http.get("users?_start=" + start + "&_limit=" + limit);
    // return [{ id: 1 }, { id: 2, name: 1 }];
  }

  getByid(id) {
    //return http.get("users/" + id);

    return { id: 1, name: "name 1" };
  }

  create(body) {
    return http.post("users", body);
  }

  update(id, body) {
    return http.put("users/" + id, body);
  }

  delete(id) {
    return http.delete("users/" + id);
  }
}

export default UseApiService;
