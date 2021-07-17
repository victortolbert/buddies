<template>
  <section class="grid-view">
    <div v-if="plants.length" class="grid">
      <div v-for="plant in plants" :key="plant.id" class="card">
        <img class="plant-image" :src="`/${plant.image}`" />
        <div
          style="
            border: 1px solid #dee1e1;
            border-radius: 0.5rem;
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="font-size: 1.125rem; font-weight: 600">{{
            plant.names.common
          }}</span>
          <div style="display: flex; align-items: center">
            <BaseBadge type="toxic" />
            <button style="margin-left: 0.625rem">
              <BaseIconOutlined name="heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    plants: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.grid-view {
  margin-top: 4rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}
</style>
