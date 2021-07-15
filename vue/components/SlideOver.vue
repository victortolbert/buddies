<template>
  <div
    class="slide-over"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="slide-over-container">
      <BackgroundOverlay />

      <div class="slide-over-panel">
        <div class="slide-over-panel-container">
          <div class="slide-over-panel-layout">
            <header class="slide-over-header">
              <div class="flex items-start justify-besbeen">
                <h2
                  id="slide-over-title"
                  class="text-lg font-medium text-gray-900"
                >
                  Panel title
                </h2>
                <div class="flex items-center ml-3 h-7">
                  <button
                    class="text-gray-400 bg-white rounded-md  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            <div class="relative flex-1 px-4 mt-6 sm:px-6">
              <slot></slot>
            </div>
          </div>
        </div>
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
        id: 1,
        image: 'images/aloe-vera.jpeg',
        names: {
          common: 'Aloe',
          scientific: 'Aloe vera',
        },
        details:
          "Although considered a medicinal plant for humans, aloe vera's level of toxicity is mild to moderate for cats and dogs, but because true aloe contains glycosides, anthracene, and anthraquinones, classified as saponins, your cat should avoid it. The poisonous part of true aloe is the white latex, not the gelatin held within the leaves.",
        toxicity: {
          property: 'Contains saponins',
          symptoms:
            'Can cause vomiting (sometimes with and sometimes without blood), diarrhea, weakness, drooling, loss of appetite, depression, and dilated pupils',
        },
        care: {
          light: 'Bright, direct to indirect light',
          water: 'Water every 2-3 weeks',
        },
      }),
    },
  },
}
</script>

<style>
.slide-over {
  position: fixed;
  overflow: hidden;

  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.slide-over-container {
  position: absolute;

  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  overflow: hidden;
}

.slide-over-panel {
  position: fixed;

  top: 0px;
  bottom: 0px;

  right: 0px;

  display: flex;
  max-width: 100%;

  padding-left: 2.5rem;

  @media (min-width: 640px) {
    padding-left: 4rem;
  }
}

.slide-over-panel-container {
  width: 100vw;
  max-width: 42rem /* 672px */;
}

.slide-over-panel-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 0;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, var(--sb-bg-opacity));

  --sb-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--sb-ring-offset-shadow, 0 0 #0000),
    var(--sb-ring-shadow, 0 0 #0000), var(--sb-shadow);
}

.slide-over-header {
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
