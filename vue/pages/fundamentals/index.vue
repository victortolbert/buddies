<template>
  <div>
    <select v-model="selectedCategory"></select>

    <ul>
      <li v-for="resource in filteredResources" :key="resource.id">
        <img :src="resource.image" />
        {{ resource.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resources: null,
      selectedCategory: '',
    }
  },
  computed: {
    filteredResources() {
      if (this.selectedCategory === '') {
        return this.resources
      } else {
        const category = this.selectedCategory
        return this.resources.filter(
          (resource) => resource.attributes.tog === category
        )
      }
    },
    filteredPeople() {
      if (this.people) {
        return this.people.filter((person) => {
          return person.name.match(this.search)
        })
      }
      return false
    },
  },
  mounted() {
    this.$axios
      .get('/resources.json')
      .then((response) => (this.resources = response.data.data))
  },
}
</script>
