<template>
  <div class="page-wrapper">
    <template v-if="$fetchState.pending && !_articles.length">
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
        <!-- <ComponentIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <ComponentLibraryIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <DesignSystemIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <div class="relative">
          <DesignSystemsDsIcon class="text-gray-400 h-11 w-11" />
          <span>Design System</span>
        </div> -->
        <!-- <DesignSystemsFaceIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <DesignSystemsShapesIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <GovernanceIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <GuidelinesIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <PatternIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <PilotIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <ReferenceSiteIcon class="text-gray-400 h-11 w-11" /> -->
        <!-- <TokenIcon class="text-gray-400 h-11 w-11" /> -->
        <div class="mt-6">
          <UiKitIcon class="text-gray-400 h-11 w-11" />
        </div>
        <!-- <PlantCardBlock
          v-for="(article, i) in _articles"
          :key="article.id"
          v-observe-visibility="
            i === _articles.length - 1 ? lazyLoadPlants : false
          "
          :article="article"
          class="article-card-block"
        /> -->
      </div>
    </template>

    <template v-if="$fetchState.pending && _articles.length">
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
  </div>
</template>

<script>
import Plant from '~/models/Plant'
import ComponentIcon from '~/assets/icons/component.svg?inline'
import ComponentLibraryIcon from '~/assets/icons/component-library.svg?inline'
import DesignSystemIcon from '~/assets/icons/design-system.svg?inline'
import DesignSystemsDsIcon from '~/assets/icons/design-systems-ds.svg?inline'
import DesignSystemsFaceIcon from '~/assets/icons/design-systems-face.svg?inline'
import DesignSystemsShapesIcon from '~/assets/icons/design-systems-shapes.svg?inline'
import GovernanceIcon from '~/assets/icons/governance.svg?inline'
import GuidelinesIcon from '~/assets/icons/guidelines.svg?inline'
import PatternIcon from '~/assets/icons/pattern.svg?inline'
import PilotIcon from '~/assets/icons/pilot.svg?inline'
import ReferenceSiteIcon from '~/assets/icons/reference-site.svg?inline'
import TokenIcon from '~/assets/icons/token.svg?inline'
import UiKitIcon from '~/assets/icons/ui-kit.svg?inline'

export default {
  components: {
    ComponentIcon,
    ComponentLibraryIcon,
    DesignSystemIcon,
    DesignSystemsDsIcon,
    DesignSystemsFaceIcon,
    DesignSystemsShapesIcon,
    GovernanceIcon,
    GuidelinesIcon,
    PatternIcon,
    PilotIcon,
    ReferenceSiteIcon,
    TokenIcon,
    UiKitIcon,
  },
  data() {
    return {
      currentPage: 1,
      articles: [],
    }
  },
  async fetch() {
    const articles = await Plant.params({
      tag: 'nuxt',
      state: 'rising',
    })
      .page(this.currentPage)
      .get()
    this.articles = this.articles.concat(articles)
  },
  head() {
    return {
      title: 'New Nuxt.js articles',
    }
  },
  computed: {
    _articles() {
      return this.articles.map((article) => new Plant(article))
    },
  },
  activated() {
    // Call fetch again if last fetch more than 60 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  methods: {
    scrollToComments() {
      const el = document.querySelector('#comments')
      if (el) {
        const scrollTo = el.getBoundingClientRect().top
        window.scrollBy({ top: scrollTo - 20, left: 0, behavior: 'smooth' })
      }
    },
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
