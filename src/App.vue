<script setup></script>

<template>
  <header>
    <label> {{ $t("greet", { username: "Pedro" }) }}</label>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
