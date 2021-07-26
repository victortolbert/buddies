<template>
  <div>
    <main class="flex-1">
      <BasePageHeading>{{ user }}</BasePageHeading>
      <h1>Create</h1>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: 'Create an Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new event in your neighborhood',
        },
      ],
    }
  },
}
</script>
