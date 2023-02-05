import type { Ref } from "vue";
import { ref } from "vue";

interface CounterComposable {
  count: Ref<number>;
  increment: () => void;
  decrement: () => void;
}
export function useCounterComposable(): CounterComposable {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  return { count, increment, decrement };
}
