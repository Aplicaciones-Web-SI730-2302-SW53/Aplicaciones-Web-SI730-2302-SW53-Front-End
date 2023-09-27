<template>
  <div>
    <label>email</label>
    <pv-input-text v-model="email"></pv-input-text>
  </div>
  <div>
    <label>password</label>
    <pv-input-text v-model="password"></pv-input-text>
  </div>
  <pv-button @click="login">Login</pv-button>
</template>

<script>
import { SecurityApiService } from "@/services/security-api.service";

export default {
  name: "login.component",
  data() {
    return {
      email: "",
      password: "",
      securityApi: new SecurityApiService(),
    };
  },
  methods: {
    login() {
      //TODO

      this.securityApi.login(this.email, this.password).then((response) => {
        if (response.data.accessToken) {
          sessionStorage.setItem("accessToken", response.data.accessToken);
          this.$router.push("/home");
        } else {
          alert("invalid user");
        }
      });
    },
  },
};
</script>

<style scoped></style>
