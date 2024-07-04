<template>
  <nuxt-icon
    :name="name"
    :size="iconSize"
    filled
    :style="styles"
    class="icon-button"
    :class="classes"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  size?: string;
  iconSize?: string;
  variant?: "fill" | "outline";
}>();

const classes = computed(() => {
  return {
    "icon-button--fill": props.variant === "fill",
    "icon-button--outline": props.variant === "outline",
  };
});

const styles = computed(() => {
  return {
    fontSize: props.iconSize,
    width: props.size,
    height: props.size,
  };
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
}

.icon-button--fill {
  background-color: $black;
  color: #fff;
}

.icon-button--outline {
  background-color: white;
  color: $black;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
