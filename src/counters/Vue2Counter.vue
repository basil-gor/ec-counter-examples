<template>
  <div>
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
