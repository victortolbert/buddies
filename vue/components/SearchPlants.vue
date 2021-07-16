<template>
  <div class="plants">
    <h2>Plant Search</h2>
    <section>
      <form @submit.prevent="submitted">
        <input v-model="query" type="text" />
        <button>Submit</button>
      </form>
    </section>

    <div v-if="error">
      <h2>error!! {{ error }}</h2>
    </div>

    <div v-if="fetching"><h2>Fetching Data!</h2></div>

    <div v-for="plant in list" :key="plant.id" class="search-results">
      <ul>
        <li>
          <span class="title">Common Name:</span>
          <span class="plant">{{ plant.names.common }}</span>
        </li>
        <li>
          <span class="title">Scientific Name:</span>
          <span class="plant">{{ plant.names.scientific }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import usePlantList from "~/composables/usePlantList";

export default {
  setup() {
    const { submitted, list, query, error, fetching } = usePlantList();
    return {
      query,
      list,
      submitted,
      error,
      fetching,
    };
  },
};
</script>

<style scoped>
.search-results {
  display: flex;
  width: 600px;
  text-align: left;
}
.plants {
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
.plant {
  font-weight: bold;
}
</style>
