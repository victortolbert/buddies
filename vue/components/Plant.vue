<template>
  <div class="plant">
    <h2>{{ plant.names.common }}</h2>

    <div>
      <img width="200" :alt="altText" :src="plant.image" />
    </div>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    name: "Plant",
    props: {
      plant: {
        type: Object,
        default: () => ({})
      }
    },
    setup({ plant }) {
      const altText = computed(() => `The plant name: ${plant.names.common}`);
      return { altText };
    }
  };
</script>
