<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="value" required placeholder="Item Name" />
  </form>
</template>

<script>
export default {
  inject: ['itemStore'],
  data: () => ({ value: '' }),
  methods: {
    handleSubmit() {
      this.itemStore.addItem({
        id: Math.random().toString(),
        name: this.value,
      })
      this.value = ''
    },
  },
}
</script>
