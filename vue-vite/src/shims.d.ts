/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
}

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
