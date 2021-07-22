<template>
  <div
    v-if="error"
    class="flex flex-col items-center justify-center min-h-screen"
  >
    <h1 class="font-black text-9xl">{{ error.statusCode }}</h1>

    <div
      v-if="error.statusCode === 500"
      class="w-full max-w-sm mx-auto my-4 space-y-4"
    >
      <p class="text-lg">
        Sorry, something went wrong on our end. We are currently trying to fix
        the problem.
      </p>

      <p>In the meantime, you can enjoy this funny cat photo</p>
    </div>

    <h2>{{ error.message }}</h2>

    <RandomImage />

    <div class="error-navigation">
      <a href="#" @click="$router.push(-1)">&larr; Back</a>
      <NuxtLink :to="{ name: 'index___en' }">Main Page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'plain',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      promise: null,
      state: 'waiting',
    }
  },
  head() {
    return {
      title: this.error.message || 'Error Page',
    }
  },
  computed: {
    buttonText() {
      return texts[this.state]
    },
  },
}
</script>

<style>
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.appear {
  opacity: 0;
  animation: appear 1s ease-in-out 3s;
  animation-fill-mode: forwards;
}
</style>
