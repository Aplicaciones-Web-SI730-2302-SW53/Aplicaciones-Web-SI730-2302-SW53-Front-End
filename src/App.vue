<script setup></script>

<template>
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
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
}
</style>
