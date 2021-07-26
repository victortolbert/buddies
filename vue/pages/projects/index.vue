<template>
  <div>
    <section class="section">
      <ProjectToolbar />
    </section>

    <!-- <section v-if="noProjects" class="section">
      Sorry, but no projects matched your search criteria
    </section> -->

    <section v-if="fetchState.pending" class="section">
      <i>Searching...</i>
    </section>

    <section v-if="$store.state.ui.activeView === 'list'" class="section">
      <!-- <ProjectList :projects="filteredProjects" /> -->
      <pre>{{ filteredProjects }}</pre>
    </section>

    <section v-else class="p-6">
      <pre>{{ filteredProjects }}</pre>
      <!-- <ProjectGrid :projects="filteredProjects" /> -->
    </section>
  </div>
</template>

<script>
import useProjects from '~/composables/useProjects'

export default {
  setup() {
    const { fetch, fetchState, filteredProjects, visibility, query } =
      useProjects()

    return {
      visibility,
      query,
      filteredProjects,
      fetch,
      fetchState,
    }
  },
}
</script>

<style lang="postcss" scoped>
.form {
  @apply w-full mx-auto mt-12 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl;
}
.title {
  @apply text-2xl font-bold sm:text-4xl;
}

.hero {
  @apply relative px-4 overflow-hidden;
}
.hero .subtitle {
  font-size: 1.3125rem;
  max-width: 36rem;
}
.projects-header {
  @apply relative overflow-hidden bg-sky-blue;
}
</style>
