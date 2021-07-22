<template>
  <div class="page-wrapper">
    <template v-if="$fetchState.pending && !_plants.length">
      <div class="plant-cards-wrapper">
        <content-placeholders
          v-for="p in 30"
          :key="p"
          rounded
          class="plant-card-block"
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>

    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>

    <template v-else>
      <PlantHeader />

      <section class="section">
        <PlantToolbar />
      </section>

      <section class="section">
        <PlantGrid :plants="_plants" />
      </section>

      <section class="section">
        <PlantList :plants="_plants" />
      </section>

      <!-- <PlantList
          v-for="(plant, i) in _plants"
          :key="plant.id"
          v-observe-visibility="
            i === _plants.length - 1 ? lazyLoadPlants : false
          "
          :plant="plant"
          class="plant-card-block"
        /> -->
    </template>

    <template v-if="$fetchState.pending && _plants.length">
      <div class="plant-cards-wrapper">
        <content-placeholders
          v-for="p in 30"
          :key="p"
          rounded
          class="plant-card-block"
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>
  </div>
</template>

<script>
import Plant from '~/models/Plant'

export default {
  data() {
    return {
      plants: [],
      currentPage: 1,
      showFavorites: false,
      selectedCategory: '',
    }
  },
  async fetch() {
    const data = await Plant.get()
    const plants = data.map((plant) => ({ ...plant, isFavorite: false }))

    this.plants = this.plants.concat(plants)
  },
  head() {
    return {
      title: 'New Nuxt.js plants',
    }
  },
  computed: {
    _plants() {
      return this.plants.map((plant) => new Plant(plant))
    },
  },
  methods: {
    lazyLoadPlants(isVisible) {
      if (isVisible) {
        if (this.currentPage < 5) {
          this.currentPage++
          this.$fetch()
        }
      }
    },
  },
}
</script>
