<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <section class="mx-6">
      <b-badge pill variant="primary">Primary</b-badge>
      <b-badge pill variant="secondary">Secondary</b-badge>
      <b-badge pill variant="success">Success</b-badge>
      <b-badge pill variant="danger">Danger</b-badge>
      <b-badge pill variant="warning">Warning</b-badge>
      <b-badge pill variant="info">Info</b-badge>
      <b-badge pill variant="light">Light</b-badge>
      <b-badge pill variant="dark">Dark</b-badge>
    </section>

    <div class="mb-0 h2">
      <b-icon-arrow-up></b-icon-arrow-up>
      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    </div>

    <div class="text-center">
      <b-button variant="primary">
        Profile
        <b-badge variant="light"
          >9 <span class="sr-only">unread messages</span></b-badge
        >
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Admin',
          href: '#',
        },
        {
          text: 'Manage',
          href: '#',
        },
        {
          text: 'Library',
          active: true,
        },
      ],
    }
  },
}
</script>
