<template>
  <main
    class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900"
  >
    <BasePageHeading>
      Announcements
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Add Announcements</span>
        </button>
      </template>
    </BasePageHeading>
  </main>
</template>
