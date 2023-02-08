import type { Ref, ToRefs } from "vue";
import { computed } from "vue";
import type { DesignSettings } from "@/vue-basics/types/design-settings";
import { DEFAULT_DESIGN_SETTINGS } from "@/vue-basics/consts/design-settings-examples";

export function useDesignSettings(
  designSettingsOverrides: Ref<Partial<DesignSettings> | undefined>
): ToRefs<DesignSettings> {
  const buttonColor = computed(
    () =>
      designSettingsOverrides.value?.buttonColor ??
      DEFAULT_DESIGN_SETTINGS.buttonColor
  );
  const buttonSize = computed(
    () =>
      designSettingsOverrides.value?.buttonSize ??
      DEFAULT_DESIGN_SETTINGS.buttonSize
  );
  const isImageHasBorder = computed(
    () =>
      designSettingsOverrides.value?.isImageHasBorder ??
      DEFAULT_DESIGN_SETTINGS.isImageHasBorder
  );
  const imageSize = computed(
    () =>
      designSettingsOverrides.value?.imageSize ??
      DEFAULT_DESIGN_SETTINGS.imageSize
  );

  return {
    buttonColor,
    buttonSize,
    isImageHasBorder,
    imageSize,
  };
}
