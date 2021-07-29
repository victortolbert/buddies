<template>
  <div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex flex-col py-4 border-t  hover:bg-gray-50 sm:items-center sm:flex-row"
    >
      <MediaObject class="w-64" :project="project" />

      <div class="w-32 mt-4 ml-0 sm:ml-4 sm:mt-0">
        <Badge :type="`${project.toxicity && 'toxic'}`">
          {{ project.toxicity ? 'Toxic' : 'Non-toxic' }}
        </Badge>
      </div>

      <div class="flex-1 mt-4 ml-0 sm:truncate sm:mt-0 sm:ml-4">
        <PlantDetailButton :project-id="project.id" class="text-left">
          {{ project.details }}
        </PlantDetailButton>
      </div>

      <div
        class="absolute order-first ml-0  sm:mx-4 m right-6 sm:static sm:order-last"
      >
        <FavoriteButton :project-id="project.id"> Favorite </FavoriteButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    showProjectDetails(id) {
      this.$router.push({ path: `/${id}` })
    },
  },
}
</script>
