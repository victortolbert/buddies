<template>
  <div>
    <ul>
      <li v-for="plant in plantStore.state.plants" :key="plant.id">
        <span>{{ plant.name }}</span>
        <button @click="plantStore.removeItem(plant.id)">delete</button>
      </li>
    </ul>
    <div>Total Items: {{ plantStore.totalLength }}</div>
  </div>
</template>

<script>
export default {
  inject: ['plantStore'],
}
</script>
