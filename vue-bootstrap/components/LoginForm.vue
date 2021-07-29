<template>
  <div>
    <label> Name <input v-model="form.name" type="text" /> </label>
    <label> Password <input v-model="form.password" type="password" /> </label>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      // spreading an object effectively clones it's top level properties
      // for objects with nested objects you'll need a more thorough solution
      form: { ...this.user },
    }
  },
}
</script>
