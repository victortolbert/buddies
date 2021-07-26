<template>
  <div>
    <BasePageHeading>
      {{ page.title }}
    </BasePageHeading>

    <div class="mx-6 mt-6 max-w-none">
      <div class="prose-sm prose">
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
