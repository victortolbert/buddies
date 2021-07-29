<template>
  <div class=".background-overlay" aria-hidden="true"></div>
</template>

<style>
.background-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  background-color: rgba(107, 114, 128, 0.75);
}
</style>
