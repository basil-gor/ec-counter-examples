import type { Ref } from "vue";
import { computed } from "vue";
import type { DesignSettings } from "@/vue-basics/types/design-settings";
import { useDesignSettings } from "@/vue-basics/composables/design-settings";

export function useImageStyleClass(
  designSettingsOverrides: Ref<Partial<DesignSettings> | undefined>
) {
  const { isImageHasBorder, imageSize } = useDesignSettings(
    designSettingsOverrides
  );

  const imageBorderClass = computed(() =>
    isImageHasBorder.value ? "image_with-border" : ""
  );
  const imageSizeClass = computed(() => {
    switch (imageSize.value) {
      case "small":
        return "image_size-small";
      case "medium":
        return "image_size-medium";
      case "big":
        return "image_size-big";
      default:
        return "";
    }
  });

  return {
    imageBorderClass,
    imageSizeClass,
  };
}
