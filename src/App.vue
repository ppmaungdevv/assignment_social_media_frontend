<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const auth_store = useAuthStore()
</script>

<template>
  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->

  <router-view></router-view>
</template>

<style scoped></style>
