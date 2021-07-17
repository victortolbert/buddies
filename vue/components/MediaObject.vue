<template>
  <div>
    <div class="flex flex-col sm:flex-row sm:items-center">
      <div class="flex items-center flex-shrink-0">
        <DetailButton>
          <Avatar class="w-32 h-32" :image="plant.image" />
        </DetailButton>
      </div>

      <div class="mt-4 sm:mt-0 sm:ml-4">
        <DetailButton class="text-lg font-semibold leading-none">
          {{ plant.names.common }}
        </DetailButton>

        <p class="mt-1 text-sm italic">{{ plant.names.scientific }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plant: {
      type: Object,
      default: () => ({
        image: 'images/no-image.jpeg',
      }),
    },
  },
}
</script>
