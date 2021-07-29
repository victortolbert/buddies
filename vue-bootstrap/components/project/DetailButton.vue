<template>
  <button
    type="button"
    class="hover:underline"
    @click.prevent="modalOpen = true"
  >
    <slot>Plant Detail</slot>
    <ProjectDetailModal
      :show="modalOpen"
      :plant-id="plantId"
      @close="modalOpen = false"
    />
  </button>
</template>

<script>
export default {
  name: 'ProjectDetailButton',
  props: {
    projectId: {
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
