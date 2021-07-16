<template>
  <div class="plant-search">
    <Search :search="state.search" @search="handleSearch" />

    <p class="intro">Sharing a few of our favorite plants</p>
    <!-- <pre>{{ state.plants }}</pre> -->

    <div class="plants">
      <Plant v-for="plant in state.plants" :key="plant.id" :plant="plant" />
    </div>
  </div>
</template>

<script>
  import Search from './Search.vue';
  import Plant from './Plant.vue';

  import { usePlantApi } from '~/composables/usePlantApi';

  export default {
    name: 'PlantSearch',
    components: { Search, Plant },
    setup() {
      const state = usePlantApi();
      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
  }
</script>

<style>
  .plant-search {
    text-align: center;
  }
  .header {
    background-color: #282c34;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
  }
  .spinner {
    height: 80px;
    margin: auto;
  }
  .intro {
    font-size: large;
  }
  /* new css for plant component */
  * {
    box-sizing: border-box;
  }
  .plants {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .header h2 {
    margin: 0;
  }
  .add-plants {
    text-align: center;
  }
  .add-plants button {
    font-size: 16px;
    padding: 8px;
    margin: 0 10px 30px 10px;
  }
  .plant {
    padding: 5px 25px 10px 25px;
    max-width: 25%;
  }
  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }
  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }
  .search > input[type="text"]{
    width: 40%;
    min-width: 170px;
  }
  @media screen and (min-width: 694px) and (max-width: 915px) {
    .plant {
      max-width: 33%;
    }
  }
  @media screen and (min-width: 652px) and (max-width: 693px) {
    .plant {
      max-width: 50%;
    }
  }
  @media screen and (max-width: 651px) {
    .plant {
      max-width: 100%;
      margin: auto;
    }
  }
</style>
