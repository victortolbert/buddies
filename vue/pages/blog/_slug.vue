<template>
  <article
    class="flex w-screen lg:h-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="article.img"
        :alt="article.alt"
        class="absolute object-cover w-full h-full"
      />
      <div class="overlay"></div>
      <div class="absolute text-white top-32 left-32">
        <NuxtLink to="/blog"><Logo /></NuxtLink>
        <div class="flex mt-16 -mb-3 text-sm uppercase">
          <p class="mr-3">
            {{ formatDate(article.updatedAt) }}
          </p>
          <span class="mr-3">•</span>
          <p>{{ article.author.name }}</p>
        </div>
        <h1 class="text-6xl font-bold">{{ article.title }}</h1>
        <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
            <span
              class="px-2 py-1 mb-2 mr-2 font-medium tracking-wider uppercase truncate transition-colors duration-300 ease-linear border rounded-full  text-ss border-light-border dark:border-dark-border"
            >
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
        </span>
      </div>
      <div class="absolute flex top-3rem right-3rem">
        <NuxtLink
          to="/blog"
          class="self-center mr-8 font-bold text-white hover:underline"
        >
          All articles
        </NuxtLink>
        <a
          href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
          class="self-center mr-8 font-bold text-white hover:underline"
        >
          Tutorial
        </a>
        <BlogSearchInput />
      </div>
    </div>
    <div
      class="relative h-full overflow-y-scroll  xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full markdown-body post-right custom-scroll"
    >
      <h1 class="text-4xl font-bold">{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p class="pb-4">Post last updated: {{ formatDate(article.updatedAt) }}</p>
      <!-- table of contents -->
      <nav class="pb-6">
        <ul>
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{
              'font-semibold': link.depth === 2,
            }"
          >
            <nuxtLink
              :to="`#${link.id}`"
              class="hover:underline"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3,
              }"
              >{{ link.text }}</nuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <author :author="article.author" />
      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="mt-8" />
    </div>
  </article>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next,
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
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/icons/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
