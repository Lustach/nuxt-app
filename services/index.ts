import type { Article } from "~/types";

const apiFetch = $fetch.create({ baseURL: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work" });
export function articlesService() {
  return {
    async getList(): Promise<Article[]> {
      return await apiFetch("/posts");
    },

    async getItem(id: number | string) {
      return await apiFetch(`/posts/${id}`);
    },
  };
}
