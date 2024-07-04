export function usePagination() {
  const currentPage = ref(1);
  const itemsPerPage = ref(8);
  const totalItems = ref(0);

  return {
    currentPage,
    itemsPerPage,
    totalItems,
  };
}
