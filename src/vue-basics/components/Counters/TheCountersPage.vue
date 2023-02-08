<template>
  <h2>Counters:</h2>
  <div class="counters">
    Simple counter:
    <TheCounter></TheCounter>
    Composabled counter:
    <TheCounterComposabled></TheCounterComposabled>
    Shared store counter:
    <TheCounterStored></TheCounterStored>
    <TheCounterStored></TheCounterStored>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCounter from "@/vue-basics/components/Counters/TheCounter.vue";
import TheCounterComposabled from "@/vue-basics/components/Counters/TheCounterComposabled.vue";
import TheCounterStored from "@/vue-basics/components/Counters/TheCounterStored.vue";

export default defineComponent({
  name: "TheCountersPage",
  components: {
    TheCounter,
    TheCounterComposabled,
    TheCounterStored,
  },
});
</script>

<style>
.counters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
