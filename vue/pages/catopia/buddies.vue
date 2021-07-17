<template>
  <div>
    <Header />

    <section class="hidden section">
      <Tools />
    </section>

    <section v-if="$store.state.ui.activeView === 'list'" class="section">
      <List :plants="filteredPlants" />
    </section>

    <section v-else class="p-6">
      <Gallery :plants="filteredPlants" />
    </section>
  </div>
</template>

<script>
// $store.state.plants.list
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('plants')
    return {
      plants: data,
    }
  },
  data() {
    return {
      selectedCategory: '',
    }
  },
  computed: {
    filteredPlants() {
      return this.plants.filter((plant) => plant.toxicity !== null)

      // if (this.selectedCategory === '') {
      //   return this.plants
      // } else {
      //   // const category = this.selectedCategory

      //   // Toxicity
      // }
    },
  },
}
</script>
