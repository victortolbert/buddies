<template>
  <div class="view-switcher">
    <label class="label" for="table-view">View Options</label>

    <div class="icon-button-group">
      <button @click="$store.commit('ui/SET_ACTIVE_VIEW', 'grid')">
        <BaseSvg class="icon" name="grid" />
      </button>

      <button @click="$store.commit('ui/SET_ACTIVE_VIEW', 'list')">
        <BaseSvg class="icon" name="list" />
      </button>
    </div>
  </div>
</template>

<style lang="postcss">
.icon-button-group {
  display: flex;
  justify-content: center;
  height: 2rem;
  margin-top: 0.25rem;
  border-width: 1px;
  border: transparent;
}

.icon {
  color: rgba(156, 163, 175, 1);
  &:hover {
    color: rgba(75, 85, 99, 1);
  }
}
</style>
