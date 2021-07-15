<template>
  <div class="button-group">
    <label class="label" for="all-plants">Category</label>
    <span class="buttons">
      <button
        id="all-plants"
        type="button"
        class="button"
        @click="$store.commit('SET_PLANT_FILTER', null)"
      >
        All plants
      </button>
      <button
        type="button"
        class="button"
        @click="$store.commit('SET_PLANT_FILTER', 'favorites')"
      >
        Favorites
      </button>
    </span>
  </div>
</template>

<style lang="postcss">
.buttons {
  margin-top: 0.25rem;
  position: relative;
  z-index: 0;
  display: inline-flex;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.buttons :first-child {
  border-top-left-radius: 0.375rem /* 6px */;
  border-bottom-left-radius: 0.375rem /* 6px */;
}
.buttons :last-child {
  margin-left: -1px;
  border-top-right-radius: 0.375rem /* 6px */;
  border-bottom-right-radius: 0.375rem /* 6px */;
}

.button {
  display: inline-flex;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-width: 1px;
  border-color: rgba(209, 213, 219, 1);
  color: rgba(55, 65, 81, 1);
  background-color: rgba(255, 255, 255, var(--sb-bg-opacity));
  white-space: nowrap;
  padding: 0.5rem 2rem;

  &:hover {
    background-color: rgba(249, 250, 251, var(--sb-bg-opacity));
  }

  &:focus {
    z-index: 10;

    outline: 2px solid transparent;
    outline-offset: 2px;

    --sb-ring-offset-shadow: var(--sb-ring-inset) 0 0 0
      var(--sb-ring-offset-width) var(--sb-ring-offset-color);
    --sb-ring-shadow: var(--sb-ring-inset) 0 0 0
      calc(1px + var(--sb-ring-offset-width)) var(--sb-ring-color);
    box-shadow: var(--sb-ring-offset-shadow), var(--sb-ring-shadow),
      var(--sb-shadow, 0 0 #0000);
  }
}
</style>
