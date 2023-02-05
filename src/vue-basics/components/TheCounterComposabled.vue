<template>
  <div>
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { useCounterComposable } from "@/vue-basics/composables/counter-composable";

export default {
  name: "TheCounterComposabled",
  setup() {
    const { count, increment, decrement } = useCounterComposable();

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
