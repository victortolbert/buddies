<template>
  <header class="relative overflow-hidden plants-header bg-light-blue">
    <nav class="flex items-center p-6 text-white bg-black h-18">
      <RouterLink to="/" class="brand">
        <SvgLogoMark />
        <span class="brand-text">Catopia!</span>
      </RouterLink>
    </nav>

    <!-- <PlantsHero /> -->
    <section class="relative px-4 overflow-hidden hero h-80">
      <form
        class="w-full mx-auto mt-12 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl"
      >
        <h1 class="text-2xl font-bold title sm:text-4xl">
          Can my cat eat that?
        </h1>
        <h2 class="mt-2 subtitle">
          Search and filter common house plants and see what’s safe for
          Sprinkles to nibble on.
        </h2>

        <div class="mt-4 search-field">
          <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4074 10.3704C19.4074 15.3614 15.3614 19.4074 10.3704 19.4074C5.37935 19.4074 1.33333 15.3614 1.33333 10.3704C1.33333 5.37935 5.37935 1.33333 10.3704 1.33333C15.3614 1.33333 19.4074 5.37935 19.4074 10.3704ZM17.2169 18.1596C15.3904 19.7663 12.9941 20.7407 10.3704 20.7407C4.64297 20.7407 0 16.0978 0 10.3704C0 4.64297 4.64297 0 10.3704 0C16.0978 0 20.7407 4.64297 20.7407 10.3704C20.7407 12.9941 19.7663 15.3904 18.1596 17.2169L23.4344 22.4916L22.4916 23.4344L17.2169 18.1596Z"
              fill="#364141"
            />
          </svg>
          <input
            class="search-input"
            type="search"
            placeholder="Spider plant, fiddle leaf fig, etc..."
          />
        </div>
      </form>
    </section>

    <SvgCatLeft
      class="absolute left-0 hidden origin-left transform scale-75 sm:left-2 lg:left-6 bottom-8 sm:block lg:scale-100 cat"
    />
    <SvgCatRight
      class="absolute hidden origin-right transform scale-75 sm:block -right-5 top-14 cat-right lg:scale-100"
    />
  </header>
</template>

<style lang="postcss">
.cat-right {
}
.plants-header {
  /* background-color: var(--color-light-blue);
  position: relative;
  overflow: hidden; */

  nav {
    /* background-color: #002138;
    padding: 1rem;
    color: white; */
  }
  /* .cat {
    @apply;
  } */
}

.hero {
  .subtitle {
    font-size: 1.3125rem;
    max-width: 36rem;
  }
}

.brand {
  display: flex;
  align-items: center;
}

.brand-text {
  font-size: 1.3125rem;
  font-weight: 900;
  margin-left: 0.5rem;
}

.search-field {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.search-input {
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding-left: 4rem;
  font-weight: 300;
  color: #b0b6b7;
  font-size: 1.625rem;
  height: 56px;
  width: 100%;
  border-radius: 32px;
  border: 1px solid #dee1e1;
}
</style>
