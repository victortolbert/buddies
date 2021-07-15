<template>
  <button @click="$store.commit('ui/OPEN_OVERLAY')">
    <slot>Details</slot>
    <Portal v-if="$store.state.ui.overlayIsOpen" to="overlays">
      <!-- <Detail
        :show="$store.state.ui.overlayIsOpen"
        @close="$store.commit('ui/CLOSE_OVERLAY')"
      /> -->
    </Portal>
  </button>
</template>
