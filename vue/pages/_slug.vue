<template>
  <div>
    <sidebar-menu
      :menu="menu"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    >
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <span slot="toggle-icon">toggle-icon</span>
      <span slot="dropdown-icon">dropdown-icon</span>
    </sidebar-menu>

    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    SidebarMenu,
  },
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
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Dashboard',
        },
      ],
    }
  },
  methods: {
    // onToggleCollapse(collapsed) {},
    // onItemClick(event, item, node) {},
  },
}
</script>
