<template>
  <div
    id="layout"
    :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]"
  >
    <div>
      <Nuxt />
    </div>

    <SidebarMenu
      :menu="menu"
      :collapsed="collapsed"
      :show-one-child="true"
      width="250px"
      @toggle-collapse="onToggleCollapse"
    >
      <div slot="header" class="py-2 bg-primary-500">
        <NuxtLink to="/" class="flex items-center text-white">
          <HancockLogo />
          <span v-if="!collapsed" class="font-bold">Legacy Docs</span>
        </NuxtLink>
      </div>

      <span slot="toggle-icon" class="flex items-center px-2 space-x-2">
        <span>
          <BaseIconSolid :name="`${collapsed ? 'page-first' : 'page-last'}`" />
        </span>
        <span v-if="!collapsed">Toggle Toolbar</span>
      </span>
    </SidebarMenu>

    <div
      v-if="isOnMobile && !collapsed"
      class="sidebar-overlay"
      @click="collapsed = true"
    />
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import HancockLogo from '~/assets/logos/hancock-h.svg?inline'

export default {
  components: {
    SidebarMenu,
    HancockLogo,
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
          href: '/dashboard',
          title: 'Dashboard',
          icon: 'fa fa-tachometer-alt',
        },
        // {
        //   href: '/plants',
        //   title: 'Plants',
        //   icon: 'fa fa-tasks',
        // },
        // {
        //   href: '/products',
        //   title: 'Products',
        //   icon: 'fa fa-tasks',
        // },
        {
          href: '/projects',
          title: 'Projects',
          icon: 'fa fa-tasks',
        },
        {
          href: '/settings',
          title: 'Settings',
          icon: 'fa fa-cog',
        },
        // {
        //   title: 'Settings',
        //   icon: 'fa fa-cog',
        //   child: [
        //     {
        //       title: 'Service Type List',
        //       href: '/service-types',
        //     },
        //     {
        //       title: 'Territory List',
        //       child: [
        //         {
        //           title: 'page',
        //         },
        //         {
        //           title: 'Page',
        //         },
        //       ],
        //     },
        //     {
        //       title: 'Announcements',
        //     },
        //     {
        //       title: 'Another Level 2',
        //       child: [
        //         {
        //           title: 'Level 3',
        //           child: [
        //             {
        //               title: 'Page',
        //             },
        //             {
        //               title: 'Page',
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
        {
          href: '/calendar',
          title: 'Calendar',
          icon: 'fa fa-calendar',
        },
        // {
        //   href: '/customers',
        //   title: 'Customers',
        //   icon: 'fa fa-users',
        // },
        {
          href: '/billing',
          title: 'Billing',
          icon: 'fa fa-credit-card',
        },
        // {
        //   href: '/reports',
        //   title: 'Reports',
        //   icon: 'fa fa-file-alt',
        // },
        // {
        //   href: '/service-types',
        //   title: 'Service Types',
        //   icon: 'fas fa-map',
        // },
        {
          href: '/service-regions',
          title: 'Service Regions',
          icon: 'fas fa-map',
        },
        // {
        //   href: '/service-areas',
        //   title: 'Service Areas',
        //   icon: 'fas fa-map',
        // },
        // {
        //   href: '/territories',
        //   title: 'Territories',
        //   icon: 'fas fa-map',
        // },
      ],
      collapsed: false,
      isOnMobile: false,
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    },
  },
}
</script>

<style lang="postcss">
html,
body {
  @apply bg-gray-100;
}
#layout {
  padding-left: 250px;
  transition: 0.3s ease;
}

#layout.collapsed {
  padding-left: 50px;
}

#layout.onmobile {
  padding-left: 50px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.layout {
  padding: 50px;
}

.page-wrapper {
  /* max-width: 900px; */
  @apply max-w-lg border;
}
</style>
