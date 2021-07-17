<template>
  <section>
    <p v-if="$fetchState.pending">Fetching the plants...</p>

    <div v-else-if="$fetchState.error">
      <p>I'm having an issue fetching the plants</p>
    </div>

    <div v-else>
      <Header />

      <!-- {{ state.plants }} -->

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
import { usePlantApi } from '~/composables/usePlantApi'

export default {
  setup() {
    const state = usePlantApi()
    return {
      state,
    }
  },
  asyncData({ route, store, query }) {
    // eslint-disable-next-line no-console
    console.log({ route, store, query })

    // console.log(route.query.name);
  },
  data() {
    return {
      plants: [],
      showFavorites: false,
      selectedCategory: '',
    }
  },
  async fetch() {
    // Called also on query changes
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
    '$route.query': '$fetch',
    selectedCategory(newValue, oldValue) {
      // eslint-disable-next-line no-console
      console.log('Category changed from ' + oldValue + ' to ' + newValue)
    },
  },
}
</script>
