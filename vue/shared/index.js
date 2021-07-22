export async function init({ store, error, $axios }) {
  try {
    const plants = await $axios.get('plants')
    store.commit('plants/SET_PLANTS', plants)
  } catch (err) {
    store.commit('plants/SET_PLANTS', [])
    error({ statusCode: 500, plant: 'Oops, try again' })
  }

}
