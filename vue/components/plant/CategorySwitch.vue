<template>
  <div class="category-switch">
    <label class="label" for="all-plants">Category</label>

    <span class="button-group">
      <button
        id="all-plants"
        type="button"
        :class="`category-button ${
          $store.state.plants.selectedFilter === null && 'is-selected'
        }`"
        @click="$store.commit('plants/SET_VISIBILITY', 'all')"
      >
        All plants
      </button>
      <button
        type="button"
        :class="`category-button ${
          $store.state.plants.selectedFilter === 'favorites' && 'is-selected'
        }`"
        @click="$store.commit('plants/SET_VISIBILITY', 'favorites')"
      >
        Favorites
      </button>
    </span>
  </div>
</template>

<style lang="postcss">
.button-group {
  margin-top: 0.25rem;
  position: relative;
  z-index: 0;
  /* display: inline-flex; */
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  @apply flex items-center justify-center w-full;
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
  /* display: inline-flex; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-width: 1px;
  border-color: rgba(209, 213, 219, 1);
  /* color: rgba(55, 65, 81, 1); */
  /* background-color: rgba(255, 255, 255, var(--ds-bg-opacity)); */
  white-space: nowrap;
  padding: 0.5rem 2rem;
}

.category-button.is-selected {
  @apply text-white bg-gray-900;
}
</style>
