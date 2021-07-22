<template>
  <fieldset id="category" class="category">
    <label class="label" for="all-plants">Category</label>

    <div class="radio-group">
      <label>
        <input
          v-model="category"
          type="radio"
          name="category"
          value="all"
          checked
          @change="updateCategory"
        />
        <span>All plants</span>
      </label>
      <label>
        <input
          v-model="category"
          type="radio"
          name="category"
          value="favorites"
          @change="updateCategory"
        />
        <span>Favorites</span>
      </label>
    </div>
  </fieldset>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  computed: {
    // ...mapState({
    //   category: (state) => state.ui.category,
    // }),
    category: {
      get() {
        return this.$store.state.ui.category
      },
      set(value) {
        this.$store.commit('ui/UPDATE_CATEGORY', value)
      },
    },
  },

  methods: {
    updateCategory(event) {
      console.log('called on change...', event)
      // this.$store.commit('ui/UPDATE_CATEGORY', event.target.value)
    },
  },
}
</script>

<style>
.category .radio-group {
  @apply mt-1;
}

.category input[type='radio'] {
  display: none;
}

.category {
  margin-top: 0.75rem;
  white-space: nowrap;
}
.category input[type='radio'] + * {
  display: inline-block;
  padding: 0.25rem 2rem;
  border: 1px solid #ccc;
  cursor: pointer;
}

.category label:first-child span {
  border-right-color: transparent;
  border-top-left-radius: 0.375rem /* 6px */;
  border-bottom-left-radius: 0.375rem /* 6px */;
}
.category label:last-child span {
  border-top-right-radius: 0.375rem /* 6px */;
  border-bottom-right-radius: 0.375rem /* 6px */;
}

.category label:not(:first-child) span {
  margin-left: -4px;
}

.category label:not(:first-child):not(:last-child) span {
  border-left-color: #ccc;
  border-right-color: #ccc;
}

.category input[type='radio']:checked + * {
  background-color: #364141;
  color: white;
}
</style>
