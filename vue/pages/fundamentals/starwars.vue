<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <input
          v-model.trim="search"
          type="text"
          placeholder="Search people..."
          @keyup="getAllStarWarsPeople"
        /><br />
        <ul>
          <li v-for="person in people" :key="person.id">
            {{ person.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarWarsPeopleComponent',

  data() {
    return {
      people: [],
      search: '',
    }
  },

  mounted() {
    // console.log('Component mounted.')
  },
  created() {
    this.getAllStarWarsPeople()
  },

  methods: {
    getAllStarWarsPeople() {
      fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((res) => {
          if (this.search) {
            this.people = res.results.filter((people) =>
              people.name.toLowerCase().includes(this.search.toLowerCase())
            )
          } else {
            this.people = res.results
          }
        })
    },
  },
}
</script>
