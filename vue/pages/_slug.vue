<template>
  <div>
    <nav class="flex items-center p-6 text-white bg-black h-18">
      <RouterLink to="/" class="brand">
        <SvgLogoMark />
        <span class="brand-text">Catopia!</span>
      </RouterLink>
    </nav>

    <div class="max-w-md mx-6 mt-6">
      <div class="prose-sm prose">
        <p>{{ page.description }}</p>
        <nuxt-content :document="page" />
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
