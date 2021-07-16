import { reactive, watchEffect } from '@vue/composition-api';

export const usePlantApi = () => {
  const state = reactive({
    search: 'Aloe',
    loading: true,
    plants: []
  });

  watchEffect(() => {
    const PLANT_API_URL = `https:/api.victortolbert.com/plants/?q=${state.search}`;

    fetch(PLANT_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.plants = jsonResponse;
        // state.plants = jsonResponse.Search;
        state.loading = false;
      });
  });

  return state;
};
