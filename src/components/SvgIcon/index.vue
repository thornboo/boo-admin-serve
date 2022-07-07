<template>
<svg class='svg-icon' aria-hidden='true'></svg>
  <use :xlink:href="icon"></use>
</template>

<script setup>
import { defineProps} from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

</style>