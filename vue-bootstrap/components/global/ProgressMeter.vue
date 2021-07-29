<template>
  <div
    :class="[
      'meter',
      backgroundColorClass,
      showValue && firstMeterPercentage === 0 ? 'noValueDisplay pb-6' : '',
    ]"
  >
    <span
      :style="{ width: firstMeterPercentage + '%' }"
      :class="[
        'meter-1',
        color === 'secondary' ? 'has-background-secondary' : 'bg-primary',
      ]"
    />
    <span
      v-if="showValue"
      :style="getPercentagePosition(firstMeterPercentage)"
      class="font-semibold valueDisplay"
    >
      {{ valueToDisplay }}
    </span>
    <span :style="{ width: secondMeterPercentage + '%' }" class="meter-2" />
  </div>
</template>

<script>
export default {
  name: 'ProgressMeter',
  status: 'prototype',
  release: '1.0.0',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    backgroundColorClass: {
      type: String,
      default: 'bg-grey-light',
    },
    goal: {
      type: [String, Number],
      default: 100,
    },
    firstMeter: {
      type: Number,
      default: 0,
    },
    secondMeter: {
      type: Number,
      default: 0,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    valueToDisplay: {
      type: String,
      default: '',
    },
  },
  computed: {
    firstMeterPercentage() {
      return this.getPercentage(this.firstMeter, this.goal)
    },
    secondMeterPercentage() {
      return this.getPercentage(this.firstMeter + this.secondMeter, this.goal)
    },
  },
  methods: {
    getPercentage(part, total) {
      if (isNaN(part) || isNaN(total) || total <= 0) {
        return 0
      }
      const percent = (part / total) * 100
      if (percent > 100) {
        return 100
      }
      return percent
    },
    getPercentagePosition(percent) {
      if (percent > 15) {
        return { right: Math.abs(percent - 100) + '%' }
      } else {
        return { left: '0%' }
      }
    },
  },
}
</script>

<style>
.meter {
  height: 0.75rem;
  position: relative;
  border-radius: 25px;
}

.meter.is-small {
  height: 10px;
}

.meter > span {
  display: block;
  height: 100%;
  top: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  overflow: hidden;
}

.meter > span.meter-1 {
  z-index: 2;
}

.meter > span.meter-2 {
  background-color: orange;
  z-index: 1;
}

.meter.is-small > span {
  background-color: blue;
}

.meter > .valueDisplay {
  position: absolute;
  top: 100%;
  left: auto;
  right: auto;
  overflow: visible;
}
.meter.noValueDisplay {
  height: auto;
}
.meter.noValueDisplay .valueDisplay {
  top: 0;
  height: 0;
}
</style>
