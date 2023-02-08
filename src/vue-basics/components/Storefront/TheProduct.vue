<template>
  <div class="product">
    <p>{{ product.name }}</p>
    <img class="product__image" :src="product.imageUrl" :alt="product.name" />
    <p>Price: {{ product.price }}</p>
    <p :style="{ opacity: productQuantityInBag > 0 ? 1 : 0 }">
      Already in bag: {{ productQuantityInBag }}
    </p>
    <button @click="addToBag">Add to bag</button>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, toRefs } from "vue";
import type { Product } from "@/vue-basics/types/product";
import { useProductCart } from "@/vue-basics/composables/product-cart";

export default defineComponent({
  name: "TheProduct",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const { product } = toRefs(props);
    const { addToBag, productQuantityInBag } = useProductCart(product);

    return {
      addToBag,
      productQuantityInBag,
    };
  },
});
</script>

<style>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
}
.product__image {
  aspect-ratio: 1;
  width: 200px;
  padding: 10px;
}
</style>
