<template>
  <div class="main-layout">
    <header class="main-header">
      <h1>My App Dashboard</h1>
      <nav class="main-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/settings">Settings</router-link>
        <router-link to="/register" class="auth-link">Register</router-link>
      </nav>
    </header>
    
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>