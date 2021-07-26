<template>
  <ModalDialog v-click-outside="onClickOutside" :show="show" @close="cancel">
    <ProjectDetails :project="project" @close="cancel" />
  </ModalDialog>
</template>

<script>
export default {
  name: 'ProjectDetailModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    projectId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      project: {},
    }
  },
  async fetch() {
    const { data } = await this.$axios.get(`projects/${this.projectId}`)
    this.project = data
  },
  methods: {
    cancel() {
      this.$emit('close')
    },
    onClickOutside() {
      this.cancel()
    },
  },
}
</script>
