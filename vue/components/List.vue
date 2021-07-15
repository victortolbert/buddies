<script>
export default {
  props: {
    plants: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<template>
  <div>
    <div
      v-for="plant in plants"
      :key="plant.id"
      class="flex flex-col py-4 border-t  hover:bg-gray-50 sm:items-center sm:flex-row"
    >
      <MediaObject class="w-64" :plant="plant" />

      <div class="mt-4 ml-0 sm:ml-4 sm:mt-0">
        <Badge />
      </div>

      <div class="flex-1 mt-4 ml-0 sm:truncate sm:mt-0 sm:ml-4">
        {{ plant.details }}
      </div>

      <div
        class="absolute order-first ml-0  sm:mx-4 m right-6 sm:static sm:order-last"
      >
        <FavoriteButton> Favorite </FavoriteButton>
      </div>
    </div>
  </div>
</template>
