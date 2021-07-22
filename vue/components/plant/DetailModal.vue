<template>
  <ModalDialog v-click-outside="onClickOutside" :show="show" @close="cancel">
    <PlantDetails :plant="plant" @close="cancel" />
  </ModalDialog>
</template>

<script>
export default {
  name: 'PlantDetailModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    plantId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      plant: {},
    }
  },
  async fetch() {
    const { data } = await this.$axios.get(`plants/${this.plantId}`)
    this.plant = data
  },
  methods: {
    cancel() {
      this.$emit('close')
    },
    onClickOutside() {
      this.cancel()
    },
  },
}
</script>
