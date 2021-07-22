<template>
  <div>
    <label for="location" class="label">Toxicity</label>
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

export default {
  computed: {
    ...mapState({
      category: (state) => state.ui.category,
    }),
    // category: {
    //   get() {
    //     return this.$store.state.ui.category
    //   },
    //   set(value) {
    //     this.$store.commit('ui/UPDATE_CATEGORY', value)
    //   },
    // },
  },

  methods: {
    updateCategory(event) {
      console.log('onChange... updateCategory refetch?...', event.target.value)
      // console.log(event.target.value)
      this.$store.commit('ui/UPDATE_CATEGORY', event.target.value)
      this.$store.commit('plants/SET_VISIBILITY', event.target.value)
    },
  },
}
</script>
