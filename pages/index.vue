<template>
  <div class="article-container">
    <Article
      v-for="item in showPaginableData"
      :id="item.id"
      :key="item.id"
      :image="item.image"
      :preview="item.preview"
    />
    <Pagination
      v-if="articles.length"
      :items-per-page="itemsPerPage"
      :current-page="currentPage"
      :length="articles.length"
      @handle-page="handlePage"
    />
  </div>
</template>

<script setup lang="ts">
import { usePagination } from "@/components/ui/Pagination/composables/usePagination";
import { articlesService } from "@/services";
import type { Article } from "~/types";

const { itemsPerPage, currentPage, totalItems } = usePagination();
const articles = ref<Article[]>([]);

onMounted(async () => {
  articles.value = await articlesService().getList();
  totalItems.value = articles.value.length;
});
function handlePage(i: number) {
  currentPage.value = i;
}
const showPaginableData = computed(() => {
  if (currentPage.value === 1)
    return articles.value.slice(0, itemsPerPage.value);
  return articles.value.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    (currentPage.value - 1) * itemsPerPage.value + 8,
  );
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.title {
  font-weight: 400;
  font-size: 84px;
  margin-top: 120px;
  margin-bottom: 40px;
}
.article {
  &-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 33px;
  }
}
</style>
