<template>
  <div>
    <label for="location" class="label">Visible</label>
    <select
      id="location"
      name="location"
      class="select-input"
      @change="updateCategory"
    >
      <option value="all">Select an option</option>
      <option value="toxic">Toxic</option>
      <option value="non-toxic">Non-toxic</option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { inject } from '@vue/composition-api'

export default {
  setup() {
    const visibility = inject('visibility')
    return {
      visibility,
    }
  },
  computed: {
    ...mapState({
      category: (state) => state.ui.category,
    }),
  },

  methods: {
    updateCategory(event) {
      this.$store.commit('ui/UPDATE_CATEGORY', event.target.value)
      this.visibility = event.target.value
    },
  },
}
</script>
