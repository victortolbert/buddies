<template>
  <button type="button" @click="$store.commit('ui/OPEN_OVERLAY')">
    <slot>Details</slot>

    <Portal v-if="$store.state.ui.overlayIsOpen" to="overlays">
      <PlantDetail
        :show="$store.state.ui.overlayIsOpen"
        :plant-id="plantId"
        @close="modalOpen = false"
      />
    </Portal>
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
  computed: {
    computedClasses() {
      return {
        'w-48': true,
      }
    },
  },
}
</script>
