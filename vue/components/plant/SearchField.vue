<template>
  <div class="search-field">
    <SvgSearchIcon class="search-icon" />

    <input class="search-input" type="search" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
}
</script>
