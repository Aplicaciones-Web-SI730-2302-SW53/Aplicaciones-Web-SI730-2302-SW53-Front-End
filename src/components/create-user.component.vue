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
  <pv-button @click="create()">Crear</pv-button>
</template>

<script>
import UseApiService from "@/services/use-api.service";

export default {
  name: "create-user.component",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      useApiService: new UseApiService(),
    };
  },
  methods: {
    create() {
      const body = {
        name: this.name,
        username: this.username,
        email: this.email,
      };

      this.useApiService
        .create(body)
        .then((response) => {
          if (response.status === 201) {
            alert("user created " + response.data.id);
          } else {
            alert("user not create");
          }
        })
        .catch((error) => {
          alert("Error", error.message);
        });
    },
  },
};
</script>

<style scoped></style>
