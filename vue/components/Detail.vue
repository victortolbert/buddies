<template>
  <div
    style="
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
    "
  >
    <div
      style="
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
      "
    >
      <!-- Overlay -->
      <div
        style="
          background-color: rgba(107, 114, 128, 0.75);
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          overflow: hidden;
        "
        aria-hidden="true"
      />

      <div
        style="
          display: flex;
          padding-left: 4rem;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          overflow: hidden;
          max-width: 100%;
        "
      >
        <div style="max-width: 42rem; width: 100vw">
          <div
            style="
              height: 100%;
              display: flex;
              flex-direction: column;
              overflow-y: scroll;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
            "
          >
            <div v-if="plant" class="detail">
              <div style="position: relative">
                <img
                  class="plant-image"
                  :style="`height:  25rem`"
                  :src="`/${plant.image}`"
                />
                <button
                  :style="`
                    position: absolute;
                    top: 0;
                    right: 0;
                    margin: 1rem;
                    border-radius: 0.375rem;
                    padding: 0;
                    line-height: inherit;
                    background-color: transparent;
                    background-image: none;
                    font-family: inherit;
                    font-size: 100%;
                    cursor: pointer;
                    border-width: 0;
                  `"
                  @click="$emit('close')"
                >
                  <span class="sr-only">Close panel</span>
                  <SvgX />
                </button>
              </div>

              <div class="detail-body">
                <div class="detail-header">
                  <div>
                    <h1 class="plant-common-name-title">
                      {{ plant.names.common }}
                    </h1>
                    <h2 class="plant-scientific-name-subtitle">
                      {{ plant.names.scientific }}
                    </h2>
                  </div>
                  <div style="display: flex; align-items: center">
                    <span
                      class="tag"
                      :style="`background-color: ${
                        plant.toxicity ? '#FFBC00' : '#006B40'
                      }; color: ${plant.toxicity ? 'black' : 'white'}`"
                      >{{ plant.toxicity ? 'Toxic' : 'Non-toxic' }}</span
                    >
                    <button
                      style="
                        margin-left: 0.625rem;
                        padding: 0;
                        line-height: inherit;
                        background-color: transparent;
                        background-image: none;
                        font-family: inherit;
                        font-size: 100%;
                        cursor: pointer;
                        border-width: 0;
                      "
                    >
                      <SvgHeart />
                    </button>
                  </div>
                </div>
                <div
                  id="details"
                  class="detail-section"
                  style="margin-top: 2.1875rem"
                >
                  <h3 class="detail-section-heading">Details</h3>
                  <div class="detail-section-body">
                    <p>{{ plant.details }}</p>
                  </div>
                </div>
                <div id="toxicity" class="detail-section">
                  <h3 class="detail-section-heading">Toxicity</h3>
                  <div class="detail-section-body">
                    <ul
                      style="
                        margin-left: 1rem;
                        list-style-position: outside;
                        list-style-type: disc;
                      "
                    >
                      <li>{{ plant.toxicity.property }}</li>
                      <li>{{ plant.toxicity.symptoms }}</li>
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
                          background: url('/images/water.svg') no-repeat left
                            50%;
                        "
                      >
                        {{ plant.care.water }}
                      </li>
                      <li
                        style="
                          line-height: 2rem;
                          padding-left: 2rem;
                          background: url('/images/light.svg') no-repeat left
                            50%;
                        "
                      >
                        {{ plant.care.light }}
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
.plant-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
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

.plant-common-name-title {
  font-size: 2rem;
  line-height: 1.65rem;
  font-weight: 700;
  color: #273333;
}

.plant-scientific-name-subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.3125rem;
  font-style: italic;
  color: #515e5f;
}
</style>
