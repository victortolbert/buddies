<template>
  <div class="mx-16 my-8 prose">
    <template v-if="$fetchState.pending">
      <ContentPlaceholders>
        <ContentPlaceholdersHeading />
        <ContentPlaceholdersText :lines="10" />
      </ContentPlaceholders>
    </template>

    <template v-else-if="$fetchState.error">
      <h1>Plant #{{ $route.params.id }} not found</h1>
    </template>

    <template v-else>
      <h2>
        <NuxtLink to="/plants">&larr; Back</NuxtLink>
      </h2>

      <h1>{{ plant.names.common }}</h1>

      <span class="text-gray-700">
        <span class="block text-xs tracking-wider uppercase">From</span>
        <b>{{ plant.names.common }}</b>
      </span>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="plant.details" />
    </template>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from '@nuxtjs/composition-api'
import { strip } from '@/helpers'

export default defineComponent({
  name: 'PlantPage',
  setup() {
    const plant = ref()

    const truncate = (html) => {
      return `${strip(html).substr(0, 50)}...`
    }

    const { $axios, params } = useContext()

    useFetch(async () => {
      plant.value = await $axios.$get(`plants/${params.value.id}`)
    })

    return { plant, truncate }
  },
})
</script>
