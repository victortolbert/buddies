<template>
  <form class="search">
    <input
       type="text"
       :value="movieTitle"
       @keyup="handleChange"
    />
    <input type="submit" value="SEARCH" @click="handleSubmit" />
  </form>
</template>

<script>
  import { ref } from '@vue/composition-api';
  export default {
    name: 'Search',
    props: {
      search: {
        type: String,
        default: ''
      }
    },
    setup({ search }, { emit }) {
      const movieTitle = ref(search);
      return {
        movieTitle,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', movieTitle.value);
        },
        handleChange(event) {
          movieTitle.value = event.target.value
        }
      }
    }
  };
</script>
