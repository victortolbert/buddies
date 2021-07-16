<template>
  <RadioGroup v-model="plan">
    <RadioGroupLabel>Plan</RadioGroupLabel>
    <RadioGroupOption v-slot="{ checked }" value="startup">
      <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
    </RadioGroupOption>
    <RadioGroupOption v-slot="{ checked }" value="business">
      <span :class="checked ? 'bg-blue-200' : ''">Business</span>
    </RadioGroupOption>
    <RadioGroupOption v-slot="{ checked }" value="enterprise">
      <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script>
  import { ref } from 'vue'
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  } from '@headlessui/vue'

  export default {
    components: { RadioGroup, RadioGroupLabel, RadioGroupOption },

    setup() {
      const plan = ref('startup')

      return { plan }
    },
  }
</script>
