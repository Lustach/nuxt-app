<template>
  <div class="pagination">
    <IconButton
      size="44px"
      icon-size="13"
      name="arrow"
      class="pagination-btn rotate"
      @click="prevPage"
    />
    <div class="pagination-btns">
      <Button
        v-for="i in Math.round(length / itemsPerPage)"
        :key="i"
        class="pagination-btn"
        :class="currentPage === i ? 'active' : ''"
        @click="handlePage(i)"
      >
        {{ i }}
      </Button>
    </div>
    <IconButton
      size="44px"
      icon-size="13"
      name="arrow"
      class="pagination-btn"
      @click="nextPage"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  length: number;
  itemsPerPage: number;
  currentPage: number;
}

export interface Emits {
  (e: "handlePage", i: number): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

function handlePage(i: number) {
  return emits("handlePage", i);
}
function prevPage() {
  if (props.currentPage !== 1) {
    handlePage(props.currentPage - 1);
  }
}

function nextPage() {
  if (props.currentPage !== Math.round(props.length / props.itemsPerPage)) {
    handlePage(props.currentPage + 1);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.pagination {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  overflow: hidden;

  &-btn {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    line-height: 8px;
    background-color: transparent;
    border: 1px solid $gray-light;
    padding: 0;
    color: rgba(16, 16, 16, 1);
    &:hover {
      background-color: $gray-1;
    }
  }
  &-btns {
    gap: 10px;
    display: flex;
  }
}
.pagination .rotate {
  transform: rotate(-180deg);
}
.active {
  background-color: $gray;
  color: white;
}
</style>
