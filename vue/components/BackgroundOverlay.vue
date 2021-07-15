<template>
  <div class=".background-overlay" aria-hidden="true"></div>
</template>

<style>
.background-overlay {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  background-color: rgba(107, 114, 128, 0.75);
}
</style>
