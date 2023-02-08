<template>
  <div class="product">
    <p>{{ product.name }}</p>
    <img
      :class="['product__image', imageBorderClass, imageSizeClass]"
      :src="product.imageUrl"
      :alt="product.name"
    />
    <p>Price: {{ product.price }}</p>
    <p :style="{ opacity: productQuantityInBag > 0 ? 1 : 0 }">
      Already in bag: {{ productQuantityInBag }}
    </p>
    <button @click="addToBag" :class="[buttonSizeClass, buttonColorClass]">
      Add to bag
    </button>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, ref, toRefs } from "vue";
import type { Product } from "@/vue-basics/types/product";
import { useProductCart } from "@/vue-basics/composables/product-cart";
import { useButtonStyleClass } from "@/vue-basics/composables/button-style-class";
import { useImageStyleClass } from "@/vue-basics/composables/image-style-class";

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
    const { buttonColorClass, buttonSizeClass } = useButtonStyleClass(ref());
    const { imageBorderClass, imageSizeClass } = useImageStyleClass(ref());

    return {
      addToBag,
      productQuantityInBag,
      buttonColorClass,
      buttonSizeClass,
      imageBorderClass,
      imageSizeClass,
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

.button_size-small {
  font-size: 12px;
}
.button_size-medium {
  font-size: 15px;
}
.button_size-big {
  font-size: 20px;
}
.button_color-red {
  background-color: red;
  color: white;
}
.button_color-blue {
  background-color: blue;
  color: white;
}

.image_with-border {
  border: 2px solid black;
}
.image_size-small {
  width: 200px;
}
.image_size-medium {
  width: 250px;
}
.image_size-big {
  width: 300px;
}
</style>
