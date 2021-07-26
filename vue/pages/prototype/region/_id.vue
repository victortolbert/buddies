<template>
  <div>
    <div style="display: flex">
      <img
        v-for="image in region.images"
        :key="image"
        :src="image"
        width="200"
        height="150"
      />
    </div>
    {{ region.title }}<br />
    ${{ region.pricePerNight }} / night<br />
    <img src="/images/marker.svg" width="20" height="20" />{{
      region.location.address
    }}
    {{ region.location.city }} {{ region.location.state }}
    {{ region.location.country }}<br />
    <img src="/images/star.svg" width="20" height="20" />{{
      region.reviewValue
    }}
    <br />
    {{ region.guests }} guests, {{ region.bedrooms }} rooms,
    {{ region.beds }} beds, {{ region.bathrooms }} bath<br />
    {{ region.description }}
    <div ref="map" style="height: 800px; width: 800px"></div>
  </div>
</template>

<script>
import { regions } from '~/data/regions'

export default {
  data() {
    return {
      region: {},
    }
  },
  head() {
    return {
      title: this.region.title,
    }
  },
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.region._geoloc.lat,
      this.region._geoloc.lng
    )
  },
  created() {
    const region = regions.find(
      (region) => region.objectID === this.$route.params.id
    )
    this.region = region
  },
  methods: {},
}
</script>
