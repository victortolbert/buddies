<template>
  <form @submit.prevent="fetchPlants">
    <input v-model="q" type="search" />

    <button>Search</button>
    <PlantHeader />
    <Tools />
    <PlantGrid :plants="filteredPlants" />
    <PlantList :plants="filteredPlants" />

    <div v-for="plant in filteredPlants" :key="plant.id" class="plant">
      <img :src="`/assets/${plant.image}`" />
      <b>Common Name:</b> {{ plant.names.common }}<br />
      <b>Scientific Name:</b> {{ plant.names.scientific }}<br />
    </div>

    <div v-if="noPlants">Sorry, but no plants were found. I blame Apple.</div>

    <div v-if="isLoading">
      <i>Searching...</i>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    q: '',
    limit: 10,
    plants: [],
    showFavorites: false,
    selectedCategory: '',
    noPlants: false,
    isLoading: false,
    error: null,
  }),
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
  async created() {
    await this.fetchPlants()
  },
  methods: {
    async fetchPlants() {
      this.isLoading = true

      try {
        const { data } = await this.$axios.get(
          `plants/?q=${encodeURIComponent(this.q)}&_limit=${this.limit}`
        )
        this.plants = data.map((plant) => {
          return {
            ...plant,
            isFavorite: false,
          }
        })

        // this.$store.commit('plants/SET_PLANTS', this.plants)

        this.noPlants = this.plants.length === 0
      } catch (err) {
        this.error = err
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
