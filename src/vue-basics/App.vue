<template>
  Simple counter:
  <TheCounter></TheCounter>
  Composabled counter:
  <TheCounterComposabled></TheCounterComposabled>
  Shared store counter:
  <TheCounterStored></TheCounterStored>
  <TheCounterStored></TheCounterStored>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCounter from "@/vue-basics/components/TheCounter.vue";
import TheCounterComposabled from "@/vue-basics/components/TheCounterComposabled.vue";
import TheCounterStored from "@/vue-basics/components/TheCounterStored.vue";

export default defineComponent({
  name: "App",
  components: {
    TheCounter,
    TheCounterComposabled,
    TheCounterStored,
  },
  setup() {},
});
</script>
