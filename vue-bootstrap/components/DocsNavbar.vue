<template>
  <nav
    class="w-full bg-white border-b dark:border-gray-800 dark:bg-gray-900"
    @click="scrollToTop"
  >
    <div class="flex-1 px-4 mx-auto lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center w-1/2 lg:w-1/6" @click.stop="noop">
          <NuxtLink
            to="/"
            class="flex-shrink-0 text-primary-500"
            aria-label="Hancock Logo"
          >
            <BaseLogo
              v-if="$colorMode.value === 'light'"
              name="hancock-h"
              class="w-auto text-primary-500"
            />
            <BaseLogo v-else name="hancock-h" class="w-auto text-primary-500" />
          </NuxtLink>

          <!-- <NuxtLink
            to="/releases"
            class="flex items-center justify-center p-1 ml-1 text-xs font-bold leading-none text-green-500 bg-green-100 border border-green-200 rounded dark:text-white dark:bg-green-700 dark:border-transparent"
            >{{ lastRelease.name }}</NuxtLink
          > -->
        </div>
        <div
          class="justify-center flex-1 hidden w-4/6 ml-4 mr-2 lg:flex lg:mx-8"
        >
          <!-- <SearchInput /> -->
        </div>
        <div class="flex items-center justify-end w-1/6">
          <!-- <a
            href="https://twitter.com/nuxt_js"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            name="Twitter"
            class="hidden mr-2 lg:block hover:text-green-500"
          >
            <IconTwitter class="w-6 h-6" />
          </a>
           -->
          <!-- <a
            href="https://github.com/nuxt/content"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            name="Github"
            class="hidden mr-4 lg:block hover:text-green-500"
          >
            <IconGithub class="w-6 h-6" />
          </a> -->
          <button
            class="p-2 -mr-2 rounded-md  lg:hidden hover:text-green-500 focus:outline-none"
            aria-label="Hamburger Menu"
            @click.stop="menu = !menu"
          >
            <IconX v-if="menu" class="w-6 h-6" />
            <IconMenu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    menu: {
      get() {
        return this.$store.state.menu.open
      },
      set(val) {
        this.$store.commit('menu/toggle', val)
      },
    },
    lastRelease() {
      return this.$store.state.releases[0]
    },
  },
  methods: {
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return
      }
      window.scrollTo(0, 0)
    },
    noop() {},
  },
}
</script>
