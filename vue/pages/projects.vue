<template>
  <div>
    <BasePageHeading>
      {{ $t('projects') }}
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium border border-transparent rounded-md shadow-sm  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Customize</span>
        </button>
      </template>
    </BasePageHeading>

    <NuxtChild />
  </div>
</template>
