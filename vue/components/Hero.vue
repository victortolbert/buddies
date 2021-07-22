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
  @apply w-full max-w-sm mx-auto md:max-w-sm;
}

/*
form {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  @media (min-width: 640px) {
    overflow: hidden;
    height: 20rem;
    max-width: 52rem;
    margin: 0 auto;
    padding: 0 17rem;
    flex: 1 1 0%;
  }
} */

/* fieldset {
  margin-top: 1rem;
  position: relative;
}

*/
</style>
