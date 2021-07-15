<template>
  <div class="m-6">
    <table class="table w-full">
      <tbody>
        <tr
          v-for="plant in filteredPlants"
          :key="plant.id"
          class="table-row text-gray-500 border-t cursor-pointer  group hover:bg-gray-100 hover:shadow"
        >
          <td class="table-cell">
            <DetailButton>
              <img class="avatar" :src="require(`~/assets/${plant.image}`)" />
            </DetailButton>
          </td>

          <td class="table-cell">
            <div class="plant-common-name">
              <NuxtLink :to="`/plants/${plant.id}`">{{
                plant.names.common
              }}</NuxtLink>
            </div>
            <div class="plant-scientific-name">
              {{ plant.names.scientific }}
            </div>
          </td>
          <td class="table-cell">
            <NuxtLink
              class="hidden md:inline-block"
              :to="`/plants/${plant.id}`"
              >{{ plant.details }}</NuxtLink
            >
          </td>

          <td class="table-cell">
            <DetailButton>Detail</DetailButton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import usePlants from '@/composables/usePlants'

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const {
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      removePlant,
      filteredPlants,
      removePlants,
      markAllRead,
    } = usePlants()

    return {
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      removePlant,
      filteredPlants,
      removePlants,
      markAllRead,
    }
  },
}
</script>

<style lang="postcss">
.plant-common-name {
  font-size: 1.125rem;
  font-weight: 600;
}

.plant-scientific-name {
  font-size: 0.8125rem;
  font-style: italic;
}

.table-view {
  margin-top: 2rem;
}

.table {
  table-layout: fixed;
  width: 100%;
}
.table-row {
  border-top: 1px solid #dee1e1;
}
.table-cell {
  vertical-align: middle;
  padding: 1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
