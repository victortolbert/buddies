<template>
  <section>
    <p v-if="$fetchState.pending">Fetching the plants...</p>

    <div v-else-if="$fetchState.error">
      <p>I'm having an issue fetching the plants</p>
    </div>

    <div v-else>
      <PlantHeader />

      <section class="section">
        <PlantToolbar />
      </section>

      <section v-if="$store.state.ui.activeView === 'list'" class="section">
        <PlantList :plants="filteredPlants" />
      </section>

      <section v-else class="p-6">
        <PlantGrid :plants="filteredPlants" />
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      plants: [],
      showFavorites: false,
      selectedCategory: '',
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('plants')
    this.plants = data.map((plant) => {
      return {
        ...plant,
        isFavorite: false,
      }
    })
  },
  computed: {
    filteredPlants() {
      if (this.selectedCategory === 'toxic') {
        return this.toxicPlants()
      } else if (this.selectedCategory === 'non-toxic') {
        return this.nonToxicPlants()
      }
      return this.plants
    },
    toxicPlants() {
      return this.plants.filter(
        (plant) => typeof plant.toxicity !== 'undefined'
      )
    },
    nonToxicPlants() {
      return this.plants.filter(
        (plant) => typeof plant.toxicity === 'undefined'
      )
    },
    favoritePlants() {
      return this.plants.filter((plant) => plant.isFavorite)
    },
  },
}
</script>
