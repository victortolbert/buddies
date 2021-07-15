<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.card {
  @apply overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow;
}

.card-header {
  @apply px-4 py-5 border sm:px-6;
}

.card-body {
  @apply px-4 py-5 border sm:p-6;
}
</style>
