<template>
  <div>
    <h1>Parent Component</h1>
    <code>{{ user }}</code>
    <h1>Child Component</h1>
    <LoginForm :user="user" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: '', password: '' },
    }
  },
}
</script>
