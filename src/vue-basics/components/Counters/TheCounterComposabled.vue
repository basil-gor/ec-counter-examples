<template>
  <div>
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { useCounterComposable } from "@/vue-basics/composables/counter-composable";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheCounterComposabled",
  setup() {
    const { count, increment, decrement } = useCounterComposable();

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>
