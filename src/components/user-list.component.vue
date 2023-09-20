<template>
  <label>Lis of users</label>
  <router-link to="/create-user">Create User</router-link>

  <pv-input-text v-model="start" type="number">Start</pv-input-text>
  <pv-input-text v-model="end" type="number">End</pv-input-text>
  <pv-button @click="refresh()">Refresh</pv-button>

  <div v-for="user in users">
    <div>{{ user.id + " - " + user.name }}</div>
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
    };
  },
  async mounted() {
    new UseApiService()
      .getAll()
      .then((response) => (this.users = response.data));
  },
  methods: {
    refresh() {
      new UseApiService()
        .getByRange(this.start, this.end)
        .then((response) => (this.users = response.data));
    },
  },
};
</script>

<style scoped></style>
