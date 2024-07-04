// @ts-check
import antfu from "@antfu/eslint-config";
import nuxt from "./.nuxt/eslint.config.mjs";

export default nuxt(
  antfu({
    formatters: {
      css: true,
      markdown: "prettier",
    },
    stylistic: {
      semi: true,
      quotes: "double",
      indent: 2,

    },
    rules: {
      "vue/html-self-closing": "off",
      "no-console": "off",
      "vue/no-multiple-template-roots": "off",
      "vue/require-default-prop": "off",
      "vue/multi-word-component-names": "off",
      "arrow-parens": ["error", "always"],
      "no-irregular-whitespace": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/block-order": ["error", {
        order: [["template", "script"], "style"],
      }],
    },

    ignores: [
      "**/fixtures",
      // ...globs
    ],
  }),
);
