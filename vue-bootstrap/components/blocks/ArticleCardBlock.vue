<template>
  <NuxtLink
    :to="{
      name: 'username-article',
      params: { username: article.user.username, article: article.id },
    }"
    tag="article"
  >
    <div class="image-wrapper">
      <img
        v-if="article.cover_image"
        :src="article.cover_image"
        :alt="article.title"
      />

      <img v-else :src="article.social_image" :alt="article.title" />
    </div>

    <div class="content">
      <NuxtLink
        :to="{
          name: 'username-article',
          params: { username: article.user.username, article: article.id },
        }"
      >
        <h1>{{ article.title }}</h1>
      </NuxtLink>

      <div class="tags">
        <NuxtLink
          v-for="tag in article.tag_list"
          :key="tag"
          :to="{ name: 't-tag', params: { tag } }"
          class="tag"
        >
          #{{ tag }}
        </NuxtLink>
      </div>

      <div class="meta">
        <div class="scl">
          <span>
            <HeartIcon />
            {{ article.positive_reactions_count }}
          </span>

          <span>
            <CommentsIcon />
            {{ article.comments_count }}
          </span>
        </div>

        <time>{{ article.readable_publish_date }}</time>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import HeartIcon from '~/assets/icons/heart.svg?inline'
import CommentsIcon from '~/assets/icons/comments.svg?inline'

export default {
  components: {
    HeartIcon,
    CommentsIcon,
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>
