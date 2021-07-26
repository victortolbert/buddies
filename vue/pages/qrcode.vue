<template>
  <section class="p-6">
    <qrcode-vue :value="value" :size="size" level="H" />
  </section>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  data() {
    return {
      value: 'https://example.com',
      size: 200,
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>
