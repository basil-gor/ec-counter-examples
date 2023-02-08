import type { Ref } from "vue";
import { computed } from "vue";
import type { DesignSettings } from "@/vue-basics/types/design-settings";
import { useDesignSettings } from "@/vue-basics/composables/design-settings";

export function useButtonStyleClass(
  designSettingsOverrides: Ref<Partial<DesignSettings> | undefined>
) {
  const { buttonColor, buttonSize } = useDesignSettings(
    designSettingsOverrides
  );

  const buttonColorClass = computed(() => {
    switch (buttonColor.value) {
      case "red":
        return "button_color-red";
      case "blue":
        return "button_color-blue";
      case "default":
      default:
        return "";
    }
  });
  const buttonSizeClass = computed(() => {
    switch (buttonSize.value) {
      case "small":
        return "button_size-small";
      case "medium":
        return "button_size-medium";
      case "big":
        return "button_size-big";
      default:
        return "";
    }
  });

  return {
    buttonColorClass,
    buttonSizeClass,
  };
}
