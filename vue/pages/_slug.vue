<template>
  <div>
    <Navbar />

    <div class="max-w-md mx-6 mt-6">
      <div class="prose">
        <p>{{ page.description }}</p>

        <NuxtContent :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({
          error: err,
          statusCode: 404,
          message: 'Page not found',
        })
      })

    return {
      page,
    }
  },
}
</script>
