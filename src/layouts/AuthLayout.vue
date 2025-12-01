<script setup>
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';


// const tabs = ref({})
const tabs = {
  login :LoginForm,
  register: RegisterForm
}

const current_tab = ref('login')


</script>

<template>
  <div class="auth-layout">
    
    <main class="flex justify-center items-center bg-red-100 w-svw min-h-svh">
      <div class="md:w-1/3 h-2/3 w-full">
        <!-- tab bar -->
        <div class="flex items-center w-full bg-gray-300/50 p-1 rounded-full mb-5">

          <div 
            v-for="(component, key) in tabs"
            :key="key"
            @click="current_tab=key"
            class="w-1/2 text-center p-1 hover:cursor-pointer capitalize"
            :class="current_tab == key ? 'bg-white rounded-2xl' : ''">
            {{ key }}
          </div>
        </div>
        <!-- end of tab bar -->
        <!-- tab-content -->
        <div>
          <component :is="tabs[current_tab]"></component>
        </div>
        <!-- end of tab-content -->

        <div class="w-full bg-white/60 text-gray-400/90 font-semibold rounded-lg text-center mt-6 p-10">
          <p>Demo account for testing:</p>
          <p>Email: demo@example.com. Password: demo123</p>
        </div>
      </div>
    </main>
  </div>
</template>