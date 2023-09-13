<template>
    <div class="container">
      <label class="name"> {{ $t('Category')}} {{name}} </label>
      <label>{{content}}</label>

    <div v-for="tutorial in tutorials">
        <tutorial :title="tutorial.title" />

         </div>
  </div>
</template>

<script>
import Tutorial from "@/components/tutorial-component.vue";

export default {
    components: {Tutorial},
    props:{
        name : String,
        content: String,
        tutorials: Array
    },
    name: "category"
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    margin: 8px;
    padding: 8px;
}
.name {
   font-weight: bold;
    font-size: large;
}

</style>