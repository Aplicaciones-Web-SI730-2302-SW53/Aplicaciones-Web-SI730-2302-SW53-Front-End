<template>
  <div>
    <label>name</label>
    <pv-input-text v-model="name" type="text"></pv-input-text>
  </div>
  <div>
    <label>usernam</label>
    <pv-input-text v-model="username" type="text"></pv-input-text>
  </div>
  <div>
    <label>email</label>
    <pv-input-text v-model="email" type="text"></pv-input-text>
  </div>
  <pv-button @click="update()">Update</pv-button>
</template>

<script>
import UseApiService from "@/services/use-api.service";

export default {
  name: "update-user",
  data() {
    return {
      id: 0,
      name: "",
      username: "",
      email: "",
      useApiService: new UseApiService(),
    };
  },
  methods: {
    update() {
      const body = {
        username: this.username,
        name: this.name,
        email: this.email,
      };

      this.useApiService
        .update(this.id, body)
        .then((response) => {
          if (response.status === 200) alert("user updated");
          else alert("Error updating user");
        })
        .catch((error) => {
          alert("Error updating");
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;

    this.useApiService.getByid(this.id).then((response) => {
      this.username = response.data.username;
      this.name = response.data.name;
      this.email = response.data.email;
    });
  },
};
</script>

<style scoped></style>
