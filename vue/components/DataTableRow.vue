<script>
export default {
  props: {
    plant: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    remove(id) {
      // console.log(id)
      this.$store.commit('REMOVE_PLANT', id)
    },
  },
}
</script>

<template>
  <tr>
    <td class="px-6 py-4 align-top w-80">
      <div class="flex items-start space-x-3">
        <div class="relative flex-shrink-0 ml-2">
          <img class="flex-shrink-0 h-24" :src="`/images/${plant.image}`" />
          <button
            class="absolute top-0 left-0 -ml-6"
            @click="plant.isFavorite = !plant.isFavorite"
          >
            <BaseIcon
              name="heart"
              :class="plant.isFavorite ? 'text-red-500' : 'text-gray-500'"
            />
          </button>
        </div>
        <span>{{ plant.names.common }}</span>
      </div>
    </td>

    <td class="px-6 py-4 align-top">{{ plant.details }}</td>

    <td class="px-6 py-4 align-top">
      <button class="flex items-center space-x-2" @click="remove(plant.id)">
        <span>Delete</span>
        <BaseIcon name="trash" class="text-gray-400" />
      </button>
    </td>
  </tr>
</template>
