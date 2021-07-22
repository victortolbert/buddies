<template>
  <nav class="navbar">
    <RouterLink to="/" class="brand">
      <SvgLogoMark />
      <span class="brand-text">Catopia!</span>
    </RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: var(--ds-color-white);
  background-color: var(--ds-color-black);
  height: 4.5rem;
}
.brand {
  display: flex;
  align-items: center;
  color: var(----ds-color-white);
}

.brand-text {
  font-size: 1.3125rem;
  font-weight: 900;
  margin-left: 0.5rem;
}
</style>
