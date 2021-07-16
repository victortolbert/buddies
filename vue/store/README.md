# When should I use a Store

A store should contain data that can be accessed throughout your application.

This includes data that is used in many places

For example...

- User information that is displayed in the navbar
- as well as data that needs to be preserved through pages
  - e.g. a very complicated multi-step form.

On the other hand, you should avoid including in the store local data that could be hosted in a component instead, e.g. the visibility of an element local to a page.

**Not all applications need access to a global state, but if yours need one, [Pinia](https://pinia.esm.dev/) will make your life easier. Pinia [appears to be][vuex5_preview] the [future for Vuex 5][vuex5]**

- 💡 **Intuitive** Stores are as familiar as components. API designed to let you write well organized stores
- 🔑 **Type Safe** Types are inferred, which means stores provide you with autocompletion even in JavaScript!
- ⚙️ **Devtools support** Pinia hooks into Vue devtools to give you a enhanced development experience in both Vue 2 and Vue 3
- 🔌 **Extensible** React to store changes to extend Pinia with transactions, local storage synchronization, etc
- 🏗 **Modular by design** Build multiple stores and let your bundler code split them automatically
- 📦 **Extremely light** Pinia weights around 1kb, you will forget it's even there!
- Add [Nuxt TypeScript](https://typescript.nuxtjs.org/)
- **Code completion** One of the biggest advantages of TypeScript is its code completion and IntelliSense. IntelliSense provides active hints as a code is added
- **Type safety** Types increase your agility when doing refactoring. It’s better for the compiler to catch errors than to have things fail at runtime
- **Code quality** Types have a proven ability to enhance code quality and understandability. Large teams (Google, Microsoft, Facebook) have continually arrived at this conclusion

[axios]: https://axios-http.com/ 'Promise based HTTP client for the browser and node.js'
[composition-api]: https://v3.vuejs.org/guide/composition-api-introduction.html 'Why Composition API?'
[pinia]: https://pinia.esm.dev/ '🍍 Intuitive, type safe, light and flexible Store for Vue using the composition api with DevTools support'
[useaxios]: https://vueuse.org/integrations/useAxios/
[vue-promised]: https://github.com/posva/vue-promised#usage 'Composable Promises & Promises as components'
[vueuse]: https://vueuse.org/ 'Collection of essential Vue Composition Utilities for Vue 2 and 3'
[vuex5_preview]: https://www.youtube.com/watch?v=l1AkkVEa4ZM&t=322s
[vuex5]: https://github.com/kiaking/rfcs/blob/vuex-5/active-rfcs/0000-vuex-5.md#summary 'Introducing a brand new Vuex for Vue 3'
[why-nuxt]: https://www.youtube.com/watch?v=7ITypVi-qRY 'Why use Nuxt.js? | 7 Problems you can avoid by using Nuxt.js for your next Vue app'
[why-vite]: https://vitejs.dev/guide/why.html 'Next Generation Frontend Tooling'
