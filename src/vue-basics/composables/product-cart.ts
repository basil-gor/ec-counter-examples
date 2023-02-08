import type { Ref } from "vue";
import { computed } from "vue";
import { useCart } from "@/vue-basics/stores/cart";
import type { Product } from "@/vue-basics/types/product";

interface ProductCartComposable {
  addToBag: () => void;
  deleteFromBag: () => void;
  productQuantityInBag: Ref<number>;
}

export function useProductCart(product: Ref<Product>): ProductCartComposable {
  const cart = useCart();
  const addToBag = () => {
    cart.addToBag(product.value);
  };
  const deleteFromBag = () => {
    cart.deleteFromBag(product.value);
  };
  const productQuantityInBag = computed(() => {
    const cartItem = cart.getCartItemByProductId(product.value.id);
    return cartItem?.count ?? 0;
  });
  return { addToBag, deleteFromBag, productQuantityInBag };
}
