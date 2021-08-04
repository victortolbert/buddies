<template>
  <div class="m-8">
    <BlogHeader />

    <h1 class="">Blog Posts</h1>

    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="px-2 xs:w-full md:w-1/2 xs:mb-6 md:mb-12 article-card"
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
          />

          <div
            class="flex flex-col justify-between p-6 xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p class="text-sm font-bold text-gray-600">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h3 class="mb-4 text-2xl font-bold text-center uppercase">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="px-2 text-center xs:w-full md:w-1/3 lg:flex-1"
      >
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
          <p
            class="font-medium font-bold tracking-wider text-gray-600 uppercase  text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
    <footer class="flex justify-center border-t-2 border-gray-500"></footer>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags,
    }
  },
}
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
