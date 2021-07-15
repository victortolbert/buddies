<template>
  <div class="modal">
    <Transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
      appear
    >
      <div v-show="$store.state.ui.overlayIsOpen" class="modal-overlay">
        <div tabindex="-1" @click="dismiss" />
      </div>
    </Transition>

    <div v-show="$store.state.ui.overlayIsOpen" class="modal-panel">
      <!-- <Detail /> -->

      <div class="mt-5 sm:mt-6">
        <span class="flex w-full">
          <button
            type="button"
            class="flex items-center justify-center w-32 max-w-sm mx-auto font-bold leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-full shadow-sm  h-11 bg-secondary-600 hover:bg-secondary-500 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary sm:text-sm sm:leading-5"
            @click="$store.commit('ui/CLOSE_OVERLAY')"
          >
            Close
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsModal',
  props: {
    show: {
      type: Boolean,
    },
    preventBackgroundScrolling: {
      type: Boolean,
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          this.preventBackgroundScrolling &&
            document.body.style.setProperty('overflow', 'hidden')

          document.documentElement.style.setProperty('overflow-y', 'scroll')
        } else {
          this.preventBackgroundScrolling &&
            document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.show) {
        this.dismiss()
      }
    }

    document.addEventListener('keydown', escapeHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },
  methods: {
    dismiss() {
      document.body.style.removeProperty('overflow')
      this.$emit('close')
    },
  },
}
</script>

<style lang="postcss">
.modal {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1rem 1.5rem;
  z-index: 30;
}

.modal-panel {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  padding: 1.25rem 1rem 1rem;
  overflow: hidden;
  --sb-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--sb-ring-offset-shadow, 0 0 #0000),
    var(--sb-ring-shadow, 0 0 #0000), var(--sb-shadow);

  --sb-translate-x: 0;
  --sb-translate-y: 0;
  --sb-rotate: 0;
  --sb-skew-x: 0;
  --sb-skew-y: 0;
  --sb-scale-x: 1;
  --sb-scale-y: 1;
  transform: translateX(var(--sb-translate-x)) translateY(var(--sb-translate-y))
    rotate(var(--sb-rotate)) skewX(var(--sb-skew-x)) skewY(var(--sb-skew-y))
    scaleX(var(--sb-scale-x)) scaleY(var(--sb-scale-y));

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.modal-overlay {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  & > div {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    background-color: rgba(107, 114, 128, 1);
    opacity: 0.75;
  }
}

@screen sm {
  .modal {
    @apply inset-0 p-0 flex items-center justify-center;
  }

  .modal-panel {
    @apply max-w-3xl w-full p-6;
  }
}
</style>
