<template>
  <header class="header">
    <div class="header-container">
      <NuxtLink to="/">
        <NuxtImg src="Qtim.png" width="84" height="25" alt="logo" />
      </NuxtLink>

      <div class="header-links">
        <nav>
          <ul class="nav-list">
            <li class="nav-item">
              <NuxtLink to="/"> Work </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/"> About </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <IconButton size="52px" icon-size="24px" name="uk" rounded variant="outline" />
          <Button rounded>Let’s work</Button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.header {
  height: 121px;
  padding: 48px 40px;
  background-color: #fff;
  margin: auto;

  &-container {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-links {
    display: flex;
    align-items: center;
    gap: 90px;
    justify-content: space-between;
  }

  &-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav {
    &-list {
      display: flex;
      list-style: none;
      gap: 58px;
      margin: 0;
      padding: 0;

      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>
