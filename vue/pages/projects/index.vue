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
      <label>Filter by Project Number</label>
      <input v-model="filters.projectNumber.value" />

      <label>Filter by Claim Number</label>
      <input v-model="filters.claimNumber.value" />

      <VTable :data="filteredProjects" :filters="filters">
        <template #head>
          <th>Project#</th>
          <th>SVT</th>
          <th>Date</th>
          <th>INS CO</th>
          <th>INS ADJ</th>
          <th>Claim#</th>
          <th>Service</th>
          <th>City</th>
          <th>ST</th>
          <th>Zip</th>
          <th>Region</th>
          <th>Area</th>
          <th>Status</th>
          <th>Actions</th>
        </template>
        <template #body="{ rows }">
          <VTr v-for="row in rows" :key="row.guid" :row="row">
            <td>{{ row.ProjectNumber }}</td>
            <td>{{ row.ServiceTech }}</td>
            <td>{{ row.Date }}</td>
            <td>{{ row.InsuranceCompany }}</td>
            <td>{{ row.InsuranceAdjuster }}</td>
            <td>{{ row.ClaimNumber }}</td>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <td v-html="row.ServiceType"></td>
            <td>{{ row.City }}</td>
            <td>{{ row.State }}</td>
            <td>{{ row.PostalCode }}</td>
            <td>{{ row.ServiceRegion }}</td>
            <td>{{ row.ServiceArea }}</td>
            <td>{{ row.Status }}</td>
            <td></td>
          </VTr>
        </template>
      </VTable>
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
  data: () => ({
    filters: {
      projectNumber: { value: '', keys: ['ProjectNumber'] },
      claimNumber: { value: '', keys: ['ClaimNumber'] },
    },
  }),
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
