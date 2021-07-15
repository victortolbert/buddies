<template>
  <fieldset id="category" class="category">
    <label>
      <input type="radio" name="category" value="all" checked />
      <span>All plants</span>
    </label>

    <label>
      <input type="radio" name="category" value="favorites" />
      <span>Favorites</span>
    </label>
  </fieldset>
</template>

<style>
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
