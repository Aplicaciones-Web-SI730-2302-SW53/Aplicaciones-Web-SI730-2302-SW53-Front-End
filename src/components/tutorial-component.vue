<template>
    <label class="title" aria-roledescription="title">{{$t('tutorial')}} {{title}}</label>

    <label for="contador">Count:</label>
    <input type="text" id="contador">
</template>

<script>
export default {
    props: {
        title: String
    },
    name: "tutorial"
}
</script>

<style scoped>
.title{
    font-style: italic;
}
</style>