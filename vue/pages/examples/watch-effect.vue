<script>
import { ref, watchEffect } from '@vue/composition-api'

export default {
  setup () {
    const userID = ref(0)

    watchEffect(() => console.log("Value: " + userID.value))

    setTimeout(() => {
      userID.value = 1
    }, 1000)

    return {
      userID
    }
  }
}
</script>
