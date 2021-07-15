<template>
  <img class="avatar" :src="image" alt="" />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'images/avatar.jpeg',
    },
  },
}
</script>

<style>
.avatar {
  display: inline-block;
  border-radius: 9999px;
}
</style>
