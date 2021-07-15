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

<style>
:root {
  --sb-color-light-blue: #e9f8ff;
  --sb-color-dark-gray: #002138;
  --sb-color-med-gray: #364141;
  --sb-color-yellow: #ffbc00;
  --sb-color-green: #006b40;
  --sb-color-red: #c63434;
}

.avatar {
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
}

.button {
  display: flex;
  align-items: center;
}

.card {
  border-radius: 0.5rem;
  overflow: hidden;
}

.label {
  /* @apply block text-sm font-medium text-gray-700; */
  margin-top: 0.25rem;
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
}

.section {
  margin-top: 1.5rem;
  padding: 0 1.5rem;
}

.select {
  margin-top: 0.75rem;
  height: 2rem;
  width: 16.5rem;
  border-radius: 6px;
  border: 1px solid #b0b6b7;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
