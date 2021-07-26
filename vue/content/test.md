---
title: Calendar
---

Calendar page

## Programmatic Usage

`$content` is accessible from **@nuxt/content**.

<base-alert>

  Beware that you can access it only **after the module has been loaded** by Nuxt. `require('@nuxt/content')` should happen in hooks or internal Nuxt methods.

</base-alert>

```js
export default {
  modules: [
    '@nuxt/content'
  ],
  generate: {
    async ready () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['slug']).fetch()
      console.log(files)
    }
  }
}
```

### Static Site Generation

<base-alert type="info">

Since Nuxt 2.13+, `nuxt export` has a crawler feature integrated which will crawl all your links and generate your routes based on those links. Therefore you do not need to do anything in order for your dynamic routes to be crawled.

</base-alert>

When using `nuxt generate`, you need to specify the dynamic routes with [generate.routes](https://nuxtjs.org/api/configuration-generate/#routes), because Nuxt does not know what these routes will be so it can't generate them.

**Example**

```js
export default {
  modules: [,
    '@nuxt/content'
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
```