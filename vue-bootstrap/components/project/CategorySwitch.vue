<template>
  <div class="category-switch">
    <label class="label" for="all-projects">Category</label>
    <span class="button-group">
      <button
        id="all-projects"
        type="button"
        :class="`category-button ${visibility === 'all' && 'is-selected'}`"
        @click="visibility = 'all'"
      >
        All projects
      </button>
      <button
        type="button"
        :class="`category-button ${
          visibility === 'favorites' && 'is-selected'
        }`"
        @click="visibility = 'favorites'"
      >
        Favorites
      </button>
    </span>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
  props: {
    projectId: {
      type: Number,
      default: null,
    },
  },
  setup() {
    const visibility = inject('visibility')
    return {
      visibility,
    }
  },
  data() {
    return {
      isFavorite: false,
    }
  },
  methods: {
    updateFavorite(id) {
      this.isFavorite = !this.isFavorite
      const upDatedPlant = this.projects.find((project) => project.id === id)
      upDatedPlant.isFavorite = this.isFavorite
      this.$store.commit('projects/SET_FAVORITE', upDatedPlant)
    },
  },
}
</script>

<style lang="postcss">
.button-group {
  margin-top: 0.25rem;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.button-group :first-child {
  border-top-left-radius: 0.375rem /* 6px */;
  border-bottom-left-radius: 0.375rem /* 6px */;
}
.button-group :last-child {
  margin-left: -1px;
  border-top-right-radius: 0.375rem /* 6px */;
  border-bottom-right-radius: 0.375rem /* 6px */;
}

.category-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-width: 1px;
  border-color: rgba(209, 213, 219, 1);
  color: rgba(55, 65, 81, 1);
  background-color: rgba(255, 255, 255, var(--ds-bg-opacity));
  white-space: nowrap;
  padding: 0.5rem 2rem;
}

.category-button.is-selected {
  color: var(--ds-color-white);
  background-color: var(--ds-color-dark-gray);
}
</style>
