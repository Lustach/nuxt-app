<template>
  <article v-if="article" class="article">
    <h1>{{ article.title }}</h1>

    <div class="article-image">
      <NuxtImg :src="article.image" alt="" />
    </div>

    <div class="article-body">
      <h2 class="subtitle">About</h2>

      <p class="article-text">
        {{ article.description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { articlesService } from "@/services";

const route = useRoute();
const article = ref();
onMounted(async () => {
  article.value = await articlesService().getItem(route.params.id as string);
});
</script>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  gap: 80px;
  &-text {
    font-size: 36px;
  }
  &-image {
    img {
      width: 100%;
      height: 700px;
      object-fit: cover;
    }
  }

  &-body {
    width: 100%;
  }
}
</style>
