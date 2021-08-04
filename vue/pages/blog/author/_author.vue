<template>
  <div
    class="flex w-screen lg:h-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="articles[0].author.img"
        :alt="articles[0].author.name"
        class="absolute object-cover w-full h-full"
      />
    </div>

    <div class="overlay"></div>
    <div class="absolute text-white top-32 left-32">
      <NuxtLink to="/blog"><Logo /></NuxtLink>
      <div class="flex flex-col mt-16 -mb-3 text-sm uppercase">
        <h1 class="text-4xl font-bold">
          {{ articles[0].author.name }}
        </h1>
        <p class="mb-4">{{ articles[0].author.bio }}</p>
      </div>
    </div>
    <div
      class="relative h-full overflow-y-scroll  xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full markdown-body post-right custom-scroll"
    >
      <NuxtLink to="/blog"
        ><p class="hover:underline">Back to All Articles</p></NuxtLink
      >
      <h3 class="mb-4 text-4xl font-bold">
        Here are a list of articles by {{ articles[0].author.name }}:
      </h3>
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="w-full px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="
              localePath({ name: 'blog-slug', params: { slug: article.slug } })
            "
            class="flex transition-shadow duration-150 ease-in-out shadow-sm  hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="article.img"
              class="object-cover h-48 xxlmin:w-1/2 xxlmax:w-full"
              :src="article.img"
              :alt="article.alt"
            />

            <div
              class="flex flex-col justify-between p-6  xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <p class="text-sm font-bold text-gray-600">
                {{ formatDate(article.updatedAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({
        'author.name': {
          $regex: [params.author, 'i'],
        },
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
