import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/vue-basics/types/product";

export interface CartItem {
  count: number;
  product: Product;
}

export const useCart = defineStore("cart", () => {
  const cartItems = ref<CartItem[]>([]);
  function addToBag(product: Product) {
    const maybeCartItem = getCartItemByProductId(product.id);
    if (maybeCartItem !== undefined) {
      maybeCartItem.count++;
    } else {
      const newCartItem = {
        product,
        count: 1,
      };
      cartItems.value.unshift(newCartItem);
    }
  }
  function deleteFromBag(product: Product) {
    cartItems.value = cartItems.value.filter(
      (cartItem) => cartItem.product.id !== product.id
    );
  }
  function getCartItemByProductId(productId: Product["id"]) {
    return cartItems.value.find(
      (cartItem) => cartItem.product.id === productId
    );
  }

  const totalCartQuantity = computed(() =>
    cartItems.value.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    )
  );

  const totalCartPrice = computed(() =>
    cartItems.value.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.count * currentValue.product.price,
      0
    )
  );

  return {
    cartItems,
    addToBag,
    deleteFromBag,
    getCartItemByProductId,
    totalCartQuantity,
    totalCartPrice,
  };
});
