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
import Clipboard from 'clipboard'

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
  mounted() {
    const blocks = document.getElementsByClassName('nuxt-content-highlight')
    for (const block of blocks) {
      const button = document.createElement('button')
      button.className = 'copy'
      button.textContent = 'Copy'
      block.appendChild(button)
    }
    const copyCode = new Clipboard('.copy', {
      target(trigger) {
        return trigger.previousElementSibling
      },
    })
    copyCode.on('success', function (event) {
      event.clearSelection()
      event.trigger.textContent = 'Copied!'
      window.setTimeout(function () {
        event.trigger.textContent = 'Copy'
      }, 2000)
    })
  },
}
</script>
