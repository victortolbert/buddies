<template>
  <div>
    <DocsNavbar />
    <section class="px-8">
      <div class="mx-6 mt-6 max-w-none">
        <div class="prose-sm prose max-w-none">
          <p>{{ page.description }}</p>
          <NuxtContent :document="page" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'plain',
  colorMode: 'light',
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
