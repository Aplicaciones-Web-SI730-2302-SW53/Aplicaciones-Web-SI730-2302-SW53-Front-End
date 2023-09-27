<template>
  <label>Lis of users</label>
  <router-link to="/create-user">Create User</router-link>

  <pv-input-text v-model="start" type="number">Start</pv-input-text>
  <pv-input-text v-model="end" type="number">End</pv-input-text>
  <pv-button @click="refresh()">Refresh</pv-button>

  <div v-for="user in users">
    <div>
      {{ user.id + " - " + user.email }}

      <router-link :to="{ name: 'updateUser', params: { id: user.id } }">
        update
      </router-link>
      <pv-button label="Delete" @click="deleteUser(user.id)"></pv-button>
    </div>
  </div>
</template>

<script>
import UseApiService from "../services/use-api.service";

export default {
  name: "user-list.component",
  data() {
    return {
      users: [],
      start: 0,
      end: 10,
      useApiService: new UseApiService(),
    };
  },
  async mounted() {
    this.useApiService
      .getAll()
      .then((response) => (this.users = response.data));
  },
  methods: {
    refresh() {
      this.useApiService
        .getByRange(this.start, this.end)
        .then((response) => (this.users = response.data));
    },
    deleteUser(id) {
      this.useApiService
        .delete(id)
        .then((response) => {
          if (response.status === 200) alert("user deleted");
          else alert("Error trying to delete user");
        })
        .catch((error) => alert("Error"));
    },
  },
};
</script>

<style scoped></style>
