<template>
  <nav class="navbar">
    <RouterLink to="/" class="brand">
      <SvgLogoMark />
      <span class="brand-text">Catopia! {{ visibility }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import usePlants from '~/composables/usePlants'

export default {
  props: {
    plantId: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const { visibility, setVisibility } = usePlants()
    return {
      visibility,
      setVisibility,
    }
  },
  data() {
    return {
      isFavorite: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: var(--ds-color-white);
  background-color: var(--ds-color-black);
  height: 4.5rem;
}
.brand {
  display: flex;
  align-items: center;
  color: var(----ds-color-white);
}

.brand-text {
  font-size: 1.3125rem;
  font-weight: 900;
  margin-left: 0.5rem;
}
</style>
