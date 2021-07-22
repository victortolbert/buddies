<template>
  <ModalDialog :show="show" @close="cancel">
    <!-- <pre>{{ plant }}</pre> -->
    <PlantDetails :plant="plant" @close="cancel" />

    <!-- <button class="close-button" @click="cancel">
      <span class="sr-only">Close panel</span>
      <SvgX />
    </button> -->
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
  },
}
</script>
