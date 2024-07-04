<template>
  <div class="preview">
    <div class="img-wrapper">
      <NuxtLink :to="`/article/${id}`">
        <img :src="imageSource" />
      </NuxtLink>
    </div>
    <p class="description">{{ preview }}</p>
    <p class="read-more">
      <NuxtLink :to="`/article/${id}`">Read more</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  image: string;
  preview: string;
  id: string | number;
}

const props = defineProps<Props>();

const imageSource = ref(props.image);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.preview {
  max-width: 280px;
  font-size: 24px;
  line-height: 20px;
  cursor: pointer;

  .img-wrapper {
    min-height: 280px;
    width: 100%;
    max-width: 280px;
  }

  img {
    width: 100%;
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .read-more {
    transition: opacity 0.3s;
    opacity: 0;
    color: $lavende;
    cursor: pointer;
  }

  &:hover {
    /* position: absolute; */
    transform: translateY(-28px);
    transition: transform 0.3s;

    .read-more {
      opacity: 1;
      transition: all 0.3s;
    }
  }
}
</style>
