<template>
  <article>
    <section class="flex flex-col mt-4">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-b border-gray-200 shadow  sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <tbody>
                <DataTableRow
                  v-for="plant in paginatedPlants"
                  :key="plant.id"
                  :plant="plant"
                />

                <tr v-if="paginatedPlants.length === 0">
                  <td colspan="4">
                    <div class="p-8">
                      <strong>Add some favorites to the list</strong>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    plants: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      pageNumber: 0,
      filter: '',
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.filteredPlants.length / 10)
    },
    paginatedPlants() {
      const start = this.pageNumber * 10
      const end = start + 10
      return this.filteredPlants.slice(start, end)
    },
    filteredPlants() {
      return this.plants
    },
  },
  methods: {
    viewPlantDetails(plant) {
      this.$router.push(`/plants/${plant.id}`)
    },
  },
}
</script>
