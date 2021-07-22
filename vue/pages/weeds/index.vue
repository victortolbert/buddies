<template>
  <div>
    <template v-if="$fetchState.pending">
      <PendingPlaceholder />
    </template>

    <template v-else-if="$fetchState.error">
      <p>Error while fetching plants: {{ $fetchState.error.plant }}</p>
    </template>

    <template v-else>
      <PlantList :data="plants" />
    </template>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import usePlants from '@/composables/usePlants'

export default defineComponent({
  setup(props, context) {
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
})
</script>
