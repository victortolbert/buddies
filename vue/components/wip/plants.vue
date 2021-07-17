<template>
  <div class="">
    <Header />

    <main class="main">
      <Toolbar />
      <NuxtChild :key="$route.params.id" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PlantsLayout',
}
</script>
