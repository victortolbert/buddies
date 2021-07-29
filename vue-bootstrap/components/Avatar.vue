<template>
  <img class="avatar" :src="src" alt="" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'images/avatar.jpeg',
    },
    appearance: {
      type: String,
      default: 'circle',
    },
    // name: {
    //   type: String,
    //   required: true,
    // },
  },
}
</script>

<style>
.avatar {
  display: inline-block;
  border-radius: var(--ds-border-rounded-full);
}
</style>
