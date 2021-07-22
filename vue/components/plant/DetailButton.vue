<template>
  <button
    type="button"
    class="hover:underline"
    @click.prevent="modalOpen = true"
  >
    <slot>Plant Detail</slot>
    <PlantDetailModal
      :show="modalOpen"
      :plant-id="plantId"
      @close="modalOpen = false"
    />
  </button>
</template>

<script>
export default {
  name: 'PlantDetailButton',
  props: {
    plantId: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    isLoading: false,
    hasError: false,
    isSuccess: false,
    modalOpen: false,
  }),
}
</script>
