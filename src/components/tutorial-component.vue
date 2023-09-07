<template>

    <label class="title" aria-roledescription="title">{{$t('tutorial')}} {{title}}</label>

    <div class="row">
        <label for="count">Count:</label>
        <input type="text" id="count" aria-label="This field is for the quantity of tutorials on stock">
    </div>

    <div class="row">
        <label for="count">date of expiration:</label>
        <pv-calendar v-model="data" />
    </div>

    <div class="row">
        <label  for="quantity">Quantity:</label>
        <pv-input-text type="text"  class="input-text" />
    </div>

    <pv-button>Click PrimeVue</pv-button>
</template>

<script>
export default {
    props: {
        title: String
    },
    name: "tutorial",
    data(){
        return{
            data : new Date('01/01/2023')
        }
    }
}
</script>

<style scoped>
.title{
    font-style: italic;
}
.input-text{
    color:red;
    font-size: large;
}
.row{
    margin: 8px;
    display:flex;
    flex-direction: row;
}
.row label{
    width: 100px;
}
</style>