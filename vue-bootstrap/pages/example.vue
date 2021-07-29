
<template>
  <div class="container">
    <example-modal />
    <v-dialog>Dialog</v-dialog>
    <div>
      <BaseLogo class="text-primary-500" />

      <h1 class="title">nuxt</h1>
      <div class="links">
        <button class="button--green" @click="onClick">Show dialog</button>
        <button class="button--green" @click="click">Show modal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$modal.show('example-modal')
    },
    onClick() {
      this.$modal.show('dialog', {
        title: 'The standard Lorem Ipsum passage',
        text: 'Lorem ipsum dolor sit amet, ...',
        buttons: [
          {
            title: 'Cancel',
            handler: () => {
              this.$modal.hide('dialog')
            },
          },
          {
            title: 'Like',
            handler: () => {
              alert('Like action')
            },
          },
          {
            title: 'Repost',
            handler: () => {
              alert('Repost action')
            },
          },
        ],
      })
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
