<template>
  <div class="page">
    <main>
      <Nuxt />
    </main>

    <PortalTarget name="overlays" />
    <SlideOver class="hidden" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
