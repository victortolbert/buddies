export async function init({ app, store, error, isClient }) {
  if (isClient) return

  try {
    const plants = await app.$axios.$get(`${process.env.baseURL}/api/plants`)
    store.commit('INIT', plants)
  } catch (err) {
    store.commit('INIT', [])
    error({ statusCode: 500, plant: 'Oops, try again' })
  }
}

export const strip = html => html.replace(/<[^>]*>/g, '')
