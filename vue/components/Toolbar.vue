<template>
  <section class="toolbar">
    <div class="category">
      <label>Category</label>
      <Category />
    </div>

    <div>
      <label for="toxicity">Toxicity</label>
      <select id="toxicity" name="toxicity">
        <option value>Select an Option</option>
        <option value>Toxic</option>
        <option value>Non-toxic</option>
      </select>
    </div>

    <div>
      <label>View Options</label>

      <div class="view-icon-buttons">
        <button
          style="
            padding: 0;
            line-height: inherit;
            background-color: transparent;
            background-image: none;
            font-family: inherit;
            font-size: 100%;
            cursor: pointer;
            border-width: 0;
          "
          @click="display = 'grid'"
        >
          <BaseSvg name="grid" />
        </button>

        <button
          style="
            padding: 0;
            line-height: inherit;
            background-color: transparent;
            background-image: none;
            font-family: inherit;
            font-size: 100%;
            cursor: pointer;
            border-width: 0;
          "
          @click="display = 'list'"
        >
          <BaseSvg name="list" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.toolbar {
  display: flex;
  align-items: center;

  > * {
    margin-left: 1rem;
  }
}

.view-options {
  margin-left: 1rem;
}
.view-toxicity {
  margin-left: 1rem;
}

.view-icon-buttons {
  margin-top: 0.25rem;
  height: 2rem;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
}
</style>
