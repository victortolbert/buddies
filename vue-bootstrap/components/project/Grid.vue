<template>
  <ul role="list" class="gallery">
    <li v-for="project in projects" :key="project.id" class="gallery-item">
      <header
        class="
          block
          w-full
          overflow-hidden
          bg-gray-100
          rounded
          group
          aspect-w-10 aspect-h-7
          focus-within:ring-2
          focus-within:ring-offset-2
          focus-within:ring-offset-gray-100
          focus-within:ring-primary-500
        "
      >
        <img
          class="object-cover h-64 pointer-events-none group-hover:opacity-75"
          :src="`/projects/${project.image}`"
        />

        <ProjectDetailButton :project-id="project.id" class="gallery-button">
          <span class="sr-only">View details for IMG_4985.HEIC</span>
        </ProjectDetailButton>
      </header>

      <footer class="flex items-center justify-between p-4">
        <h3 class="text-lg font-semibold">
          {{ project.names.common }}
        </h3>
        <div class="flex items-center">
          <Badge :type="`${project.toxicity && 'toxic'}`">
            {{ project.toxicity ? 'Toxic' : 'Non-toxic' }}
          </Badge>

          <FavoriteButton
            :project-id="project.id"
            class="ml-2.5 text-gray-500 hover:text-gray-700"
          />
        </div>
      </footer>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss">
.gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    column-gap: 2rem;
  }

  .gallery-item {
    --ds-border-opacity: 1;

    position: relative;
    border-width: 1px;
    border-radius: 0.25rem;
    border-color: rgba(209, 213, 219, var(--ds-border-opacity));
  }

  .gallery-button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
}
</style>
