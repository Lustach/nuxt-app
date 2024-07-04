<template>
  <div class="contact-item">
    <h3 v-if="title" class="contact-item__title">
      {{ title }}
    </h3>

    <p v-if="description" class="contact-item">
      {{ description }}
    </p>
    <p>
      <a v-if="title" href="tel:+79202780068">+7 (920) 278—00—68</a> <br>
      <a v-if="email" href="mailto:qtim@agency.com">qtim@agency.com</a>
    </p>
    <a v-if="$slots.links" class="contact-item">
      <slot name="links" />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from "./types/index.ts";

defineProps<Contact>();
</script>

<style scoped lang="scss">
.contact-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-size: 16px;
  }

  &__title {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
