<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { BeakerIcon } from '@heroicons/vue/solid'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <section>
      <MyComponent />
    </section>
    <section>
      <MyDialog />
    </section>
    <section>
      <MyDisclosure />
    </section>
    <section>
      <MyListbox />
    </section>
    <section>
      <MyMenuButton />
    </section>
    <section>
      <MyPopover />
    </section>
    <section>
      <MyRadioGroup />
    </section>
    <section>
      <MyToggle />
    </section>
    <BeakerIcon class="h-5 w-5 text-blue-500" />
    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">{{ t('button.go') }}</button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
