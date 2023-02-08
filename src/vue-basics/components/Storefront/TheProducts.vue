<template>
  <div class="products">
    <h2>Products:</h2>
    <div class="products__items">
      <TheProduct
        v-for="product in PRODUCT_EXAMPLES"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type { Product } from "@/vue-basics/types/product";
import TheProduct from "@/vue-basics/components/Storefront/TheProduct.vue";
import { PRODUCT_EXAMPLES } from "@/vue-basics/consts/product-examples";
import { useCart } from "@/vue-basics/stores/cart";

export default defineComponent({
  name: "TheProducts",
  components: {
    TheProduct,
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    const cart = useCart();
    const { addToBag } = cart;

    return {
      PRODUCT_EXAMPLES,
      addToBag,
    };
  },
});
</script>

<style>
.products {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.products__items {
  display: flex;
  flex-direction: row;
}
</style>
