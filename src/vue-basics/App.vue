<template>
  <div class="app-container">
    <label class="app-container__switcher">
      Switch demos
      <input type="checkbox" v-model="showCounterDemo" />
    </label>
    <TheCountersPage v-if="showCounterDemo"></TheCountersPage>
    <TheStorefrontPage v-else></TheStorefrontPage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCountersPage from "@/vue-basics/components/Counters/TheCountersPage.vue";
import TheStorefrontPage from "@/vue-basics/components/Storefront/TheStorefrontPage.vue";
import { useLocalStorage } from "@vueuse/core";

export default defineComponent({
  name: "App",
  components: {
    TheStorefrontPage,
    TheCountersPage,
  },
  setup() {
    const showCounterDemo = useLocalStorage("showCountersDemo", true);

    return {
      showCounterDemo,
    };
  },
});
</script>

<style>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.app-container__switcher {
  position: fixed;
  top: 0;
  right: 0;
  padding: 50px;
}
</style>
