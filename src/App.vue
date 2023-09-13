<script setup></script>

<template>
  <header>
    <label> {{ $t("greet", { username: "Pedro" }) }}</label>
  </header>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/category">Category</router-link>
    <router-link to="/tutorial">Tutorial</router-link>
    <router-link to="/users">Users</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  display: flex;
  gap: 7px;
  justify-content: center;
  background-color: beige;
  font-size: larger;
}

main {
  background-color: azure;
  justify-content: center;
}
</style>
