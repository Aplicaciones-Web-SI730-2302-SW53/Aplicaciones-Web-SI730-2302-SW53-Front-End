<template>
    <label class="title" aria-roledescription="title">{{$t('tutorial')}} {{title}}</label>

    <label for="count">Count:</label>
    <input type="text" id="count" aria-label="This field is for the quantity of tutorials on stock">


    <label for="count">date of expiration:</label>
    <input type="date">


    <label  for="quantity">Quantity:</label>
    <input type="number" id="quantity">
    <pv-input-text type="text" />

    <img src="cat.jpg" alt="this image show a cat " aria-roledescription="click here to go the datails of the cat">
    <button>Click</button>
    <pv-button>Click PrimeVue</pv-button>
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