<template>
  <button v-bind="$attrs" class="button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  rounded?: boolean;
  variant?: "primary" | "secondary" | "danger" | "warning";
}>();

const classes = computed(() => {
  return {
    "button--rounded": props.rounded,
  };
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";
.button {
  background-color: $black;
  color: #fff;
  padding: 16px 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;

  &--rounded {
    border-radius: 999px;
  }
}
</style>
