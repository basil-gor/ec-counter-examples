<template>
  <div class="storefront">
    <TheProducts></TheProducts>
    <TheCart></TheCart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheProducts from "@/vue-basics/components/Storefront/TheProducts.vue";
import TheCart from "@/vue-basics/components/Storefront/TheCart.vue";

export default defineComponent({
  name: "TheStorefrontPage",
  components: {
    TheCart,
    TheProducts,
  },
  setup() {},
});
</script>

<style>
.storefront {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
}
</style>
