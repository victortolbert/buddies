<template>
  <div>
    <div
      v-for="plant in plants"
      :key="plant.id"
      class="flex flex-col py-4 border-t  hover:bg-gray-50 sm:items-center sm:flex-row"
    >
      <MediaObject class="w-64" :plant="plant" />

      <div class="w-32 mt-4 ml-0 sm:ml-4 sm:mt-0">
        <Badge :type="`${plant.toxicity && 'toxic'}`">
          {{ plant.toxicity ? 'Toxic' : 'Non-toxic' }}
        </Badge>
      </div>

      <div class="flex-1 mt-4 ml-0 sm:truncate sm:mt-0 sm:ml-4">
        <!-- <button @click.stop="showPlantDetails(plant.id)">
          {{ plant.details }}
        </button> -->
        <PlantDetailButton :plant-id="plant.id">
          {{ plant.details }}
        </PlantDetailButton>
      </div>

      <div
        class="absolute order-first ml-0  sm:mx-4 m right-6 sm:static sm:order-last"
      >
        <FavoriteButton :plant-id="plant.id"> Favorite </FavoriteButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plants: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    showPlantDetails(id) {
      this.$router.push({ path: `/${id}` })
    },
  },
}
</script>
