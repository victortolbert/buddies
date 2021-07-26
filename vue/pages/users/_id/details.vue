<template>
  <main class="flex-1">{{ user }}</main>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
