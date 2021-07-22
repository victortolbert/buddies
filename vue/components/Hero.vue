<template>
  <section class="hero">
    <form class="hero-form">
      <h1 class="title">Can my cat eat that?</h1>
      <h2 class="subtitle">
        Search and filter common house plants and see what’s safe for Sprinkles
        to nibble on.
      </h2>

      <div class="search-field">
        <SvgSearchIcon />
        <input
          class="search-input"
          type="search"
          placeholder="Spider plant, fiddle leaf fig, etc..."
        />
      </div>
    </form>
  </section>
</template>

<style lang="postcss" scoped>
.hero {
  .subtitle {
    font-size: 1.3125rem;
    max-width: 36rem;
    height: 20rem;
  }
}
.hero-form {
  width: 100%;
  margin: 0 auto;
  @apply w-full max-w-sm md:max-w-sm;
}
</style>
