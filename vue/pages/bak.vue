<template>
  <div>
    <header class="plants-header">
      <Navbar />

      <section class="hero">
        <form class="form" @submit.prevent="fetchPlants">
          <h1 class="title">Can my cat eat that?</h1>

          <h2 class="subtitle">
            Search and filter common house plants and see what’s safe for
            Sprinkles to nibble on.
          </h2>

          <div class="search-field">
            <SvgSearchIcon class="search-icon" />

            <input
              v-model="query"
              class="search-input"
              type="search"
              placeholder="Spider plant, fiddle leaf fig, etc..."
            />
          </div>
        </form>
      </section>

      <SvgCatLeft class="cat cat-left" />
      <SvgCatRight class="cat cat-right" />
    </header>

    <section class="section">
      <PlantToolbar />
    </section>

    <!-- <section v-if="noPlants" class="section">
      Sorry, but no plants matched your search criteria
    </section> -->

    <section v-if="isLoading" class="section">
      <i>Searching...</i>
    </section>

    <section v-if="$store.state.ui.activeView === 'list'" class="section">
      <PlantList :plants="filteredPlants" />
    </section>

    <section v-else class="p-6">
      <PlantGrid :plants="filteredPlants" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    query: 'yo',
    limit: 20,
    plants: [],
    showFavorites: false,
    noPlants: false,
    isLoading: false,
    error: null,
    visibility: 'all',
  }),
  computed: {
    ...mapGetters('plants', ['filteredPlants']),
  },
  async mounted() {
    // await this.fetchPlants()
    await this.$store.dispatch('plants/initPlants', this.query)
  },
  methods: {
    // ...mapActions('plants', ['fetchPlants']),

    async fetchPlants() {
      const data = await this.$store.dispatch('plants/fetchPlants', this.query)
      console.log(data)

      // try {
      //   const { data } = await tthis.$axios.get(
      //     `plants/?q=${encodeURIComponent(this.query)}&_limit=${this.limit}`
      //   )
      //   this.plants = data.map((plant) => {
      //     return {
      //       ...plant,
      //       isFavorite: false,
      //     }
      //   })
      //   this.store.commit('plants/SET_PLANTS', this.plants)

      //   this.noPlants = this.plants.length === 0
      // } catch (err) {
      //   this.error = err
      // } finally {
      //   this.isLoading = false
      // }
    },
    filterPlantsByCategory(plants) {
      return plants.filter((plant) => !plant.category.indexOf(this.category))
    },

    filterPlantsByName(plants) {
      return plants.filter((plant) => !plant.name.indexOf(this.name))
    },

    filterPlantsByRange(plants) {
      return plants.filter((plant) =>
        plant.price > 0 && plant.price < this.range ? plant : ''
      )
    },
  },
}
</script>

<style lang="postcss" scoped>
.form {
  @apply w-full mx-auto mt-12 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl;
}
.title {
  @apply text-2xl font-bold sm:text-4xl;
}

.hero {
  @apply relative px-4 overflow-hidden  h-80;
}
.hero .subtitle {
  font-size: 1.3125rem;
  max-width: 36rem;
}

.cat-left {
  @apply absolute left-0 hidden origin-left transform scale-75  sm:left-2 lg:left-6 bottom-8 sm:block lg:scale-100;
}
.cat-right {
  @apply absolute hidden origin-right transform scale-75 sm:block -right-5 top-14 lg:scale-100;
}
.plants-header {
  @apply relative overflow-hidden bg-sky-blue;
}
</style>
