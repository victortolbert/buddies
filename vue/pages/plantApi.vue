<template>
  <section>
    <p v-if="state.isLoading">Fetching the plants...</p>

    <div v-else-if="$fetchState.error">
      <p>I'm having an issue fetching the plants</p>
    </div>

    <div v-else>
      <form class="form" @submit.prevent="fetchPlants">
        <input
          v-model="state.query"
          class="search-input"
          type="search"
          placeholder="Spider plant, fiddle leaf fig, etc..."
        />
        <pre>{{ state.query }}</pre>
      </form>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
// import { mapGetters } from 'vuex'
import { usePlantApi } from '~/composables/usePlantApi'

export default {
  setup() {
    const { state } = usePlantApi()
    return {
      state,
      filteredPlants,
    }
  },
  data() {
    return {
      showFavorites: false,
      selectedCategory: '',
      query: 'yo',
      limit: 20,
      noPlants: false,
      isLoading: false,
      error: null,
      visibility: 'all',
    }
  },
  async fetch() {
    // Called also on query changes
    const data = await this.$axios.get(
      `plants/?q=${encodeURIComponent(this.query)}&_limit=${this.limit}`
    )
    console.log({ data })
    // this.plants = data.map((plant) => {
    //   return {
    //     ...plant,
    //     isFavorite: false,
    //   }
    // })
  },
  computed: {
    // ...mapGetters('plants', ['filteredPlants']),
    // filteredPlants() {
    //   if (this.selectedCategory === 'toxic') {
    //     return this.toxicPlants()
    //   } else if (this.selectedCategory === 'non-toxic') {
    //     return this.nonToxicPlants()
    //   }
    //   return this.plants
    // },
  },
}
</script>
