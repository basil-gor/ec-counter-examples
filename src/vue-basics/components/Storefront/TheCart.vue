<template>
  <div class="cart">
    <h2>Cart:</h2>
    <div class="cart__info">
      <div>Total Quantity: {{ totalCartQuantity }}</div>
      <div>Total Price: {{ totalCartPrice }}</div>
      <div v-for="cartItem in cartItems" :key="cartItem.product.id">
        {{ cartItem.product.name }}:
        {{ cartItem.count }}
        <button @click="deleteFromBag(cartItem.product)">❌</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, toRefs } from "vue";
import type { Product } from "@/vue-basics/types/product";
import { useCart } from "@/vue-basics/stores/cart";

export default defineComponent({
  name: "TheCart",
  components: {},
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    const cart = useCart();
    const { deleteFromBag } = cart;
    const { cartItems, totalCartQuantity, totalCartPrice } = toRefs(cart);

    return {
      deleteFromBag,
      cartItems,
      totalCartQuantity,
      totalCartPrice,
    };
  },
});
</script>

<style>
.cart {
  display: flex;
  flex-direction: column;
  padding: 50px;
  flex: 1;
}

.cart__info {
  display: flex;
  flex-direction: column;
}
</style>
