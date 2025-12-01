<script setup>
import Navbar from '../components/Navbar.vue'

</script>

<template>
  <div class="main-layout">
    <header class="main-header">
      <Navbar></Navbar>
    </header>
    
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>