<template>
  <section>
    <p v-if="$fetchState.pending">Fetching the plants...</p>

    <div v-else-if="$fetchState.error">
      <p>I'm having an issue fetching the plants</p>
    </div>

    <div v-else>
      <Header />

      <section class="section">
        <Tools />
      </section>

      <section v-if="$store.state.ui.activeView === 'list'" class="section">
        <List :plants="filteredPlants" />
      </section>

      <section v-else class="p-6">
        <Grid :plants="filteredPlants" />
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
  watch: {
    selectedCategory(newValue, oldValue) {
      // eslint-disable-next-line no-console
      console.log("Category changed from " + oldValue + " to " + newValue)
    }
  }
}
</script>
