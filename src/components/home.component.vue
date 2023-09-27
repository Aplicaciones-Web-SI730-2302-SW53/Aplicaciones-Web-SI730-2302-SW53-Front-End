<template>
  <label>Welcome to my page</label>
  <header>
    <label> {{ $t("greet", { username: "Pedro" }) }}</label>
  </header>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/category">Category</router-link>
    <router-link to="/tutorial">Tutorial</router-link>
    <router-link to="/users">Users</router-link>
  </nav>
</template>

<script>
export default {
  name: "home.component",
};
</script>

<style scoped></style>
