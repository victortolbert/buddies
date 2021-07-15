<template>
  <section class="hero h-80">
    <form class="w-full max-w-sm mx-auto md:max-w-sm">
      <h1 class="title">Can my cat eat that?</h1>
      <h2 class="subtitle">
        Search and filter common house plants and see what’s safe for Sprinkles
        to nibble on.
      </h2>

      <div class="search-field">
        <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.4074 10.3704C19.4074 15.3614 15.3614 19.4074 10.3704 19.4074C5.37935 19.4074 1.33333 15.3614 1.33333 10.3704C1.33333 5.37935 5.37935 1.33333 10.3704 1.33333C15.3614 1.33333 19.4074 5.37935 19.4074 10.3704ZM17.2169 18.1596C15.3904 19.7663 12.9941 20.7407 10.3704 20.7407C4.64297 20.7407 0 16.0978 0 10.3704C0 4.64297 4.64297 0 10.3704 0C16.0978 0 20.7407 4.64297 20.7407 10.3704C20.7407 12.9941 19.7663 15.3904 18.1596 17.2169L23.4344 22.4916L22.4916 23.4344L17.2169 18.1596Z"
            fill="#364141"
          />
        </svg>
        <input
          class="search-input"
          type="search"
          placeholder="Spider plant, fiddle leaf fig, etc..."
        />
      </div>
    </form>
  </section>
</template>

<style lang="postcss">
.search-field {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.search-input {
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding-left: 4rem;
  font-weight: 300;
  color: #b0b6b7;
  font-size: 1.625rem;
  height: 56px;
  width: 100%;
  border-radius: 32px;
  border: 1px solid #dee1e1;
}

/*

form {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  @media (min-width: 640px) {
    overflow: hidden;
    height: 20rem;
    max-width: 52rem;
    margin: 0 auto;
    padding: 0 17rem;
    flex: 1 1 0%;
  }
} */

/* fieldset {
  margin-top: 1rem;
  position: relative;
}

*/
</style>
