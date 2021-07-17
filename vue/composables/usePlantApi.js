import { useContext, reactive, watchEffect } from '@nuxtjs/composition-api';

export const usePlantApi = () => {
  const { $axios } = useContext()

  const state = reactive({
    query: '',
    loading: true,
    plants: []
  });

  watchEffect(() => {
    const PLANT_API_URL = `https:/api.victortolbert.com/plants/?q=${state.query}`;
    // fetch(PLANT_API_URL)
    //   .then(response => response.json())
    //   .then(response => {
    //     state.plants = response;
    //     state.loading = false;
    //   });
    $axios.$get(PLANT_API_URL)
      .then(response => {
        state.plants = response
        state.loading = false
      })
  });

  return state;
};
