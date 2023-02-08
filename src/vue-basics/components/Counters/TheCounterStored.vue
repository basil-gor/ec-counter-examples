<template>
  <div>
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "@/vue-basics/stores/counter-store";
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "TheCounterStored",
  setup() {
    const counterStore = useCounterStore();

    const { increment, decrement } = counterStore;
    const { count } = toRefs(counterStore);

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>
