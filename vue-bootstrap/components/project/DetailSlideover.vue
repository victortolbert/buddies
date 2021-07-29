<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <!-- Overlay -->
      <div class="overlay" aria-hidden="true" />

      <div class="content-outer-wrapper">
        <div class="content-inner-wrapper">
          <div class="content-scroll-region">
            <!-- Detail -->
            <div v-if="project" class="detail">
              <div class="image-container">
                <img
                  class="image"
                  :src="`/assets/${project.image}`"
                  :alt="`Photo of ${project.image}`"
                />
                <button class="close-button" @click="$emit('close')">
                  <span class="sr-only">Close panel</span>
                  <SvgX />
                </button>
              </div>

              <div class="detail-body">
                <div class="detail-header">
                  <div>
                    <h1 class="project-common-name-title">
                      {{ project.names.common }}
                    </h1>
                    <h2 class="project-scientific-name-subtitle">
                      {{ project.names.scientific }}
                    </h2>
                  </div>

                  <div style="display: flex; align-items: center">
                    <Badge
                      v-if="project.toxicity"
                      :type="`${project.toxicity && 'toxic'}`"
                    >
                      {{ project.toxicity ? 'Toxic' : 'Non-toxic' }}
                    </Badge>

                    <FavoriteButton class="ml-2.5">Favorite</FavoriteButton>
                  </div>
                </div>

                <div
                  id="details"
                  class="detail-section"
                  style="margin-top: 2.1875rem"
                >
                  <h3 class="detail-section-heading">Details</h3>
                  <div class="detail-section-body">
                    <p>{{ project.details }}</p>
                  </div>
                </div>

                <div
                  v-if="project.toxicity"
                  id="toxicity"
                  class="detail-section"
                >
                  <h3 class="detail-section-heading">Toxicity</h3>
                  <div class="detail-section-body">
                    <ul
                      style="
                        margin-left: 1rem;
                        list-style-position: outside;
                        list-style-type: disc;
                      "
                    >
                      <li>{{ project.toxicity.property }}</li>
                      <li>{{ project.toxicity.symptoms }}</li>
                    </ul>
                    <p class="detail-section-note">
                      If you suspect your pet may have ingested a potentially
                      toxic substance, contact your local veterinarian as soon
                      as possible.
                    </p>
                  </div>
                </div>
                <div id="care" class="detail-section">
                  <h3 class="detail-section-heading">Care</h3>
                  <div class="detail-section-body">
                    <ul style="list-style-position: outside">
                      <li
                        style="
                          line-height: 2rem;
                          padding-left: 2rem;
                          background: url('/assets/images/water.svg') no-repeat
                            left 50%;
                        "
                      >
                        {{ project.care.water }}
                      </li>
                      <li
                        style="
                          line-height: 2rem;
                          padding-left: 2rem;
                          background: url('/assets/images/light.svg') no-repeat
                            left 50%;
                        "
                      >
                        {{ project.care.light }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div v-else>Empty</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    cancel() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="postcss" scoped>
.close-button {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 0;
  background-color: transparent;
  background-image: none;
  border-radius: 0.375rem;
  border-width: 0;
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  cursor: pointer;
}
.image-container {
  position: relative;
}

.image {
  width: 100%;
  height: 16rem;
  height: 25rem;
  object-fit: cover;
}

.outer-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.inner-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.content-outer-wrapper {
  display: flex;
  padding-left: 4rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  max-width: 100%;
}

.content-inner-wrapper {
  max-width: 42rem;
  width: 100vw;
}

.content-scroll-region {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.detail {
  max-width: 673px;
  height: 1136px;
  background-color: #fff;
}

.detail-body {
  padding: 2.5rem;
}

.detail-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.detail-section {
  border-top: 1px solid #dee1e1;
  padding-top: 2.375rem;
  padding-bottom: 1.825rem;
  display: flex;
}

.detail-section-heading {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  min-width: 9.5rem;
}
.detail-section-body {
  font-size: 1rem;
  line-height: 1.5;
  color: #364141;
}

.detail-section-note {
  margin-top: 2rem;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: #364141;
}

.project-common-name-title {
  font-size: 2rem;
  line-height: 1.65rem;
  font-weight: 700;
  color: #273333;
}

.project-scientific-name-subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.3125rem;
  font-style: italic;
  color: #515e5f;
}
</style>
