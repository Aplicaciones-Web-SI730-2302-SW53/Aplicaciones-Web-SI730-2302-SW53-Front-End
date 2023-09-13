<template>
  >
  <div class="flex flex-column lg:flex-row">
    <label aria-roledescription="title" class="title"
      >{{ $t("tutorial") }} {{ title }}</label
    >

    <div class="flex flex-row-reverse justify-content-center">
      <label for="count">Count:</label>
      <input
        id="count"
        aria-label="This field is for the quantity of tutorials on stock"
        type="text"
      />
    </div>
    <label for="count">date of expiration:</label>
    <pv-calendar v-model="data" />

    <label for="quantity">Quantity:</label>
    <pv-input-text class="input-text" type="text" />

    <pv-button>Click PrimeVue</pv-button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  name: "tutorial",
  data() {
    return {
      data: new Date("01/01/2023"),
    };
  },
  methods: {
    pay(amount, id, name) {
      const factorTax = 0.18;
      let total = amount + amount * factorTax;
      //TODO Add new taxes ISC

      if (total === 0) {
        total = 10;
        return total;
      }
      return total;
    },
  },
};
</script>

<style scoped>
/*.container {
  display: flex;
  flex-direction: column;
}

.container-child {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
}*/
.title {
  font-style: italic;
}

.input-text {
  color: red;
  font-size: large;
}

.row label {
  width: 100px;
}
</style>
