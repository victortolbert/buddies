<template>
  <tr>
    <td class="select">
      <slot name="left" :data="data" :is-checked="isChecked" :hello="hello" />
    </td>

    <td class="sender">{{ plant.names.common }}</td>

    <td class="summary">
      <NuxtLink :to="`/${plant.id}`">{{ plant.names.common }}</NuxtLink>
    </td>

    <td class="actions">
      <slot name="right" />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PlantItem',
  props: {
    plant: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isChecked: true,
    data: 'Child please',
  }),
  computed: {
    isComputed() {
      return true
    },
  },
  methods: {
    hello() {
      window.alert('this is from the child')
    },
  },
}
</script>
