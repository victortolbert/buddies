<template>
  <div>
    <!-- Header -->
    <!-- <PlantHeader /> -->
    <header class="relative overflow-hidden plants-header bg-sky-blue">
      <Navbar />

      <!-- Hero -->
      <section class="relative px-4 overflow-hidden hero h-80">
        <form
          class="w-full mx-auto mt-12  sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl"
          @change="onFormChange"
          @submit.prevent="fetchPlants"
        >
          <h1 class="title">Can my cat eat that?</h1>

          <h2 class="subtitle">
            Search and filter common house plants and see what’s safe for
            Sprinkles to nibble on.
          </h2>

          <div class="search-field">
            <SvgSearchIcon class="search-icon" />

            <input
              v-model="q"
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

    <!-- Plant Toolbar Section -->
    <section class="section">
      <PlantToolbar />
    </section>

    <!-- Blank State -->
    <section v-if="noPlants" class="section">
      Sorry, but no plants matched your search criteria
    </section>

    <!-- Loading -->
    <section v-if="isLoading" class="section">
      <i>Searching...</i>
    </section>

    <section v-if="$store.state.ui.activeView === 'list'" class="section">
      <!-- <PlantList v-if="showFavorites" :plants="favoritePlants" /> -->
      <PlantList :plants="filteredPlants" />
    </section>

    <section v-else class="p-6">
      <!-- <PlantGrid v-if="showFavorites" :plants="favoritePlants" /> -->
      <PlantGrid :plants="filteredPlants" />
    </section>

    <!-- <div v-for="plant in filteredPlants" :key="plant.id" class="plant">
        <img :src="`/assets/${plant.image}`" />
        <b>Common Name:</b> {{ plant.names.common }}<br />
        <b>Scientific Name:</b> {{ plant.names.scientific }}<br />
      </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// const filters = {
//   all(plants) {
//     return plants
//   },
//   toxic(plants) {
//     return plants.filter(function (plant) {
//       return !plant.toxicity
//     })
//   },
//   nonToxic(plants) {
//     return plants.filter(function (plant) {
//       return plant.toxicity
//     })
//   },
//   favorite(plants) {
//     return plants.filter(function (plant) {
//       return plant.isFavorite
//     })
//   },
// }
export default {
  data: () => ({
    q: '',
    limit: 20,
    plants: [],
    showFavorites: false,
    selectedCategory: '',
    noPlants: false,
    isLoading: false,
    error: null,
    visibility: 'all',
  }),
  computed: {
    ...mapGetters('plants', ['filteredPlants']),
    // filteredPlants() {
    //   return filters[this.$store.state.plants.visibility](this.plants)
    // },
    // filteredPlants() {
    //   if (this.selectedCategory === 'toxic') {
    //     return this.toxicPlants()
    //   } else if (this.selectedCategory === 'non-toxic') {
    //     return this.nonToxicPlants()
    //   }
    //   return this.plants
    // },
    filterProducts() {
      return this.filterProductsByRange(
        this.filterProductsByName(this.filterProductsByCategory(this.plants))
      )
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
    onFormChange(event) {
      console.log('form changed...', event)
    },
    refresh() {
      this.$fetch()
    },
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
  /* background-color: var(--ds-color-sky-blue);
  position: relative;
  overflow: hidden; */

  nav {
    /* background-color: #002138;
    padding: 1rem;
    color: white; */
  }
  /* .cat {
    @apply;
  } */
}
</style>
