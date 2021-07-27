<template>
  <div class="flex pt-4 pb-4 border-b lg:px-8 dark:border-gray-800">
    <a
      :href="link"
      target="_blank"
      rel="noopener"
      class="flex items-center text-sm font-medium text-gray-600  dark:text-gray-400 hover:underline"
    >
      {{ $t('article.github') }}

      <ExternalLinkIcon class="w-4 h-4 ml-1" />
    </a>
  </div>
</template>

<script>
import ExternalLinkIcon from '~/assets/icons/external-link.svg?inline'

export default {
  components: {
    ExternalLinkIcon,
  },
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  computed: {
    link() {
      return `https://github.com/nuxt/content/edit/dev/docs/content${this.document.path}${this.document.extension}`
    },
  },
}
</script>
