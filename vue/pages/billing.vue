<script>
import BillingStatusType from '@/__mocks__/BillingStatusType.json'

export default {
  metaInfo() {
    return {
      title: this.$t('dashboard'),
    }
  },
  data() {
    return {
      BillingStatusType,
    }
  },
}
</script>


<template>
  <main
    class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900"
  >
    <BasePageHeading>
      Billing
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Add Customer</span>
        </button>
      </template>
    </BasePageHeading>

    <section class="m-4">
      <svg
        class="w-full h-64 text-gray-200 bg-white border-2 border-gray-300 rounded shadow "
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          d="M0 0l200 200M0 200L200 0"
        />
      </svg>
    </section>

    <section v-if="false" class="p-4 m-4">
      <OTable striped :data="BillingStatusType">
        <OTableColumn
          v-slot="props"
          sortable
          label="Component"
          field="Component"
          >{{ props.row.Component }}</OTableColumn
        >
        <OTableColumn
          v-slot="props"
          sortable
          label="Description"
          field="Comments"
          >{{ props.row.Comments }}</OTableColumn
        >
        <OTableColumn
          v-slot="props"
          sortable
          label="Status"
          field="Description"
          >{{ props.row.Description }}</OTableColumn
        >
      </OTable>
    </section>
  </main>
</template>
