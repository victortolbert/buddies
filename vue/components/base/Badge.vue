<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return type === 'toxic' && 'is-toxic'
    },
  },
}
</script>

<style lang="postcss">
.badge {
  white-space: nowrap;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 0.75rem;
}

.badge.is-toxic {
  background-color: #ffbc00;
  color: #000;
}

.badge.is-non-toxic {
  background-color: #006b40;
  color: #000;
}
</style>
