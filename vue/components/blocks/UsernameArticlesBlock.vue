<template>
  <div class="username-articles-block">
    <template v-if="$fetchState.pending">
      <div class="article-cards-wrapper">
        <ContentPlaceholders
          v-for="p in 30"
          :key="p"
          rounded
          class="article-card-block"
        >
          <ContentPlaceholdersImg />
          <ContentPlaceholdersText :lines="3" />
        </ContentPlaceholders>
      </div>
    </template>

    <template v-else-if="$fetchState.error">
      <InlineErrorBlock :error="$fetchState.error" />
    </template>

    <template v-else>
      <div class="article-cards-wrapper">
        <ArticleCardBlock
          v-for="article in _articles"
          :key="article.id"
          :article="article"
          class="article-card-block"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Article from '~/models/Article'

export default {
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    this.articles = await Article.params({
      username: this.$route.params.username,
    }).get()
  },
  computed: {
    _articles() {
      return this.articles.map((article) => new Article(article))
    },
  },
}
</script>
