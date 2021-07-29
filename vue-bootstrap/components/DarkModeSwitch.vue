<template>
  <div class="flex items-center text-gray-400">
    <BaseIconOutlined
      name="sun"
      :class="{ 'text-highlight-background': !darkMode }"
    />
    <OSwitch v-model="darkMode" size="small" class="mx-1" />
    <BaseIconOutlined
      name="moon"
      :class="{ 'text-highlight-background-dark': darkMode }"
    />
  </div>
</template>

<script>
export default {
  name: 'DarkModeSwitch',
  data() {
    return {
      darkMode: null,
    }
  },
  watch: {
    darkMode(isDarkNow, wasDarkBefore) {
      if (wasDarkBefore !== null) {
        localStorage.theme = isDarkNow ? 'dark' : 'light'
      }
      setTimeout(() => {
        const html = document.querySelector('html')

        if (isDarkNow) {
          html.classList.add('dark')
        } else {
          html.classList.remove('dark')
        }
      }, 300)
    },
  },
  mounted() {
    this.darkMode =
      localStorage.theme === 'dark'
        ? true
        : localStorage.theme === 'light'
        ? false
        : window.matchMedia('(prefers-color-scheme: dark)').matches
  },
}
</script>
