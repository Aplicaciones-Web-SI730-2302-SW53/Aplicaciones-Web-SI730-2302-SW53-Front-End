<template>
  <label>Lis of users</label>
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
    };
  },
  async mounted() {
    new UseApiService()
      .getAll()
      .then((response) => (this.users = response.data));
  },
};
</script>

<style scoped></style>
