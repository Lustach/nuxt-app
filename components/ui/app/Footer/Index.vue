<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">Is there a project?</p>

      <div class="footer-container">
        <h2 class="footer-title">Let's work together</h2>

        <div class="footer-contacts">
          <Contacts v-for="contact in contacts" :key="contact.title" v-bind="contact">
            <template v-if="contact.link" #links>
              <IconButton size="32px" icon-size="9px" name="tg" href="contact.link" />
            </template>
          </Contacts>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom_links">
          <ul>
            <li v-for="link in leftPart" :key="link.title">
              <NuxtLink class="link" :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-bottom_center">
          <span>go</span>
        </div>

        <div class="footer-bottom_links">
          <ul>
            <li v-for="link in rightPart" :key="link.title">
              <NuxtLink class="link" :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Contact, Link } from "./types/index.ts";

const contacts: Contact[] = [
  {
    title: "For all questions",
    phone: "+7 (920) 278—00—68 ",
    email: "qtim@agency.com",
    // href="mailto:qtim@agency.com"
  },
  {
    title: "Office in Russia",
    description: "139 Ruben Station Lake Drew, NM 52678",
    link: "https://github.com/Lustach",
  },
  {
    title: "Office in Dubai",
    description: "139 Ruben Station Lake Drew, NM 52678",
    link: "https://github.com/Lustach",
  },
];
const leftPart: Link[] = [
  {
    title: "facebook",
    link: "https://github.com/Lustach",
  },
  {
    title: "instagram",
    link: "https://github.com/Lustach",
  },
  {
    title: "telegram",
    link: "https://github.com/Lustach",
  },
];
const rightPart: Link[] = [
  {
    title: "behance",
    link: "https://github.com/Lustach",
  },
  {
    title: "linkedin",
    link: "https://github.com/Lustach",
  },
  {
    title: "Privacy Policy",
    link: "https://github.com/Lustach",
  },
];
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.footer {
  background-color: $lavende;
  padding: 140px 112px 30px;
  /* padding-top: 140px; */
  margin-top: 140px;
  overflow: hidden;

  &-text {
    font-size: 16px;
  }

  &-title {
    font-size: 112px;
    font-weight: 400;
    line-height: 1;

    text-decoration-line: underline;
    text-decoration-thickness: 1.5px;
    max-width: 464px;
  }

  &-container {
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
  }

  &-contacts {
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 152px;
    margin-right: 232px;
  }

  &-bottom {
    margin-top: 143px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &_links {
      ul {
        display: flex;
        gap: 32px;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        border-bottom: 1px solid rgba(16, 16, 16, 0.4);
      }

      .link {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: $black;
        text-transform: capitalize;
        transition: all 0.3s ease;
      }
    }

    &_center {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;

      span {
        position: relative;
        display: inline-block;
        z-index: 2;
        text-transform: capitalize;

        &::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -20%);
          border-radius: 50%;
          width: 358px;
          height: 358px;
          background-color: $black;
        }
      }
    }
  }
}
</style>
