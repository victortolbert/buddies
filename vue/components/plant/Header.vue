<template>
  <header class="plants-header bg-sky-blue">
    <Navbar />

    <!-- <PlantsHero /> -->
    <section class="relative px-4 overflow-hidden hero h-80">
      <form class="form">
        <h1 class="title">Can my cat eat that?</h1>

        <h2 class="subtitle">
          Search and filter common house plants and see what’s safe for
          Sprinkles to nibble on.
        </h2>

        <PlantSearchField placeholder="Spider plant, fiddle leaf fig, etc..." />
      </form>
    </section>

    <SvgCatLeft class="cat cat-left" />
    <SvgCatRight class="cat cat-right" />
  </header>
</template>

<style lang="postcss" scoped>
.form {
  @apply w-full mx-auto mt-12 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl;
}
.title {
  @apply text-2xl font-bold sm:text-4xl;
}
.subtitle {
  @apply mt-2;
}
.cat-left {
  @apply absolute left-0 hidden origin-left transform scale-75  sm:left-2 lg:left-6 bottom-8 sm:block lg:scale-100;
}
.cat-right {
  @apply absolute hidden origin-right transform scale-75 sm:block -right-5 top-14 lg:scale-100;
}
.plants-header {
  background-color: var(--ds-color-sky-blue);
  position: relative;
  overflow: hidden;

  nav {
    /* background-color: #002138;
    padding: 1rem;
    color: white; */
  }
  /* .cat {
    @apply;
  } */
}
</style>
