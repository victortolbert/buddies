<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-500 truncate bg-white border border-gray-500 rounded-md  focus:border-gray-300 focus:outline-none focus:bg-white"
    />
    <ul
      v-if="articles.length"
      class="absolute z-10 flex-1 w-auto overflow-hidden bg-white border border-gray-300 rounded-md  top-40 dark:bg-gray-900"
    >
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="
            localePath({ name: 'blog-slug', params: { slug: article.slug } })
          "
          class="flex items-center px-4 py-2 leading-5 text-green-500 transition duration-150 ease-in-out  hover:text-black"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }

      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>
