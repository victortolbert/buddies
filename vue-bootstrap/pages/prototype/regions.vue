<template>
  <div>
    <div
      v-for="region in regions"
      :key="region.objectID"
      style="float: left; margin: 10px"
    >
      <NuxtLink :to="`/region/${region.objectID}`" prefetch>
        <RegionCard :region="region" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { regions } from '~/data/regions'

export default {
  data() {
    return {
      regions: regions.slice(0, 3),
    }
  },
  head() {
    return {
      title: 'Regions',
      meta: [
        {
          name: 'description',
          content: 'This is the regions page',
          hid: 'description',
        },
      ],
    }
  },
}
</script>
