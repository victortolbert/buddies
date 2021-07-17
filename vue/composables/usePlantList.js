import { ref, toRefs, reactive } from '@nuxtjs/composition-api'
import useFetch from "./useFetch";

export default function userPlantList () {

  const plants = reactive({ list: [], error: null, fetching: false });
  const query = ref("");

  const submitted = async () => {
     const { response, error, fetchData, fetching } = await useFetch(
      `https://api.victortolbert.com/plants?names.common_like=${query.value}`,
      {}
    );

    fetchData();
    plants.list = response;
    plants.error = error;
    plants.fetching = fetching;
  };
  return { submitted, ...toRefs(plants), query };
}
