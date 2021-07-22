<template>
  <pre>{{ plant }}</pre>
</template>

<script>
export default {
  data() {
    return {
      plant: {},
    }
  },
  async fetch() {
    const { data } = await this.$axios.get(`plants/${this.$route.params.id}`)
    this.plant = data
  },
}
</script>
