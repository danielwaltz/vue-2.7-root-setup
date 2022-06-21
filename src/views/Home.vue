<script setup lang="ts">
import { ref } from 'vue'
const hello = ref('Test change!')
</script>

<template>
  <div>
    {{ hello }} update
  </div>
</template>
