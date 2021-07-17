<template>
  <div>
    <dropdownlist :data-items="sports" :default-item="'Select sport ...'">
    </dropdownlist>
  </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns'

export default {
  components: {
    dropdownlist: DropDownList,
  },
  data() {
    return {
      sports: ['Basketball', 'Football', 'Tennis', 'Volleyball'],
    }
  },
}
</script>
