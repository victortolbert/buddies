<template>
  <div>
    <img :src="region.images[0]" style="width: 200px" /><br />
    {{ region.title }}<br />
    {{ region.location.address }} {{ region.location.city }}
    {{ region.location.state }}<br />
    {{ region.guests }} guests<br />
    {{ region.pricePerNight }} / night<br />
  </div>
</template>

<script>
export default {
  props: {
    region: {
      type: Object,
      required: true,
    },
  },
}
</script>
