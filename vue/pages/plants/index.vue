<template>
  <div>
    <template v-if="$fetchState.pending">
      <PendingPlaceholder />
    </template>

    <template v-else-if="$fetchState.error">
      <p>Error while fetching plants: {{ $fetchState.error.plant }}</p>
    </template>

    <template v-else>
      <Table :data="$store.state.plants.list" />
    </template>
  </div>
</template>

<script>
import usePlants from '@/composables/usePlants'

export default {
  name: 'PlantsView',
  setup() {
    const {
      plants,
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      filteredPlants,
    } = usePlants()

    return {
      plants,
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      filteredPlants,
    }
  },
}
</script>
