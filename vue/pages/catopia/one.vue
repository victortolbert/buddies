<script>
export default {
  data() {
    return {
      plants: [],
      showFavorites: false,
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(`plants`);
    this.plants = data.map((plant) => {
      return {
        ...plant,
        isFavorite: false,
      };
    });
  },
  computed: {
    favoritePlants() {
      return this.plants.filter((plant) => plant.isFavorite);
    },
  },
};
</script>

<template>
  <section class="w-full p-8 mx-auto bg-white shadow-lg rounded-m">
    <p v-if="$fetchState.pending">Fetching the the rated plants...</p>

    <div v-else-if="$fetchState.error" class="space-y-4">
      <p>I'm having an issue fetching the plants</p>
    </div>
    <div v-else>
      <header class="pb-5 border-b border-gray-200">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Plants List</h3>
      </header>

      <section>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="
              block
              w-full
              py-2
              pl-3
              pr-10
              text-base
              border-gray-300
              rounded-md
              focus:outline-none focus:ring-primary-500 focus:border-primary-500
              sm:text-sm
            "
          >
            <option selected="plants">All Plants</option>
            <option selected="plants-favorites">Favorite Plants</option>
          </select>
        </div>

        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <div class="flex items-center space-x-4">
              <nav class="flex -mb-px space-x-8" aria-label="Tabs">
                <button
                  :class="[
                    showFavorites === false
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                  ]"
                  class="
                    flex
                    px-1
                    py-4
                    text-sm
                    font-medium
                    border-b-2
                    whitespace-nowrap
                  "
                  @click="showFavorites = false"
                >
                  All Plants
                </button>
                <button
                  :class="[
                    showFavorites === true
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                  ]"
                  class="
                    flex
                    px-1
                    py-4
                    text-sm
                    font-medium
                    border-b-2
                    whitespace-nowrap
                  "
                  @click="showFavorites = true"
                >
                  Favorite Plants
                </button>
              </nav>

              <!-- <input
                @keydown="resetPage"
                type="search"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Filter by title or overview text..."
                v-model="filter"
              />-->
            </div>
          </div>
        </div>
      </section>

      <DataTable v-if="showFavorites" :plants="favoritePlants" />
      <DataTable v-else :plants="plants" :total-results="totalResults" />
    </div>
  </section>
</template>
