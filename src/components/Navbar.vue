<script setup>
import { ref } from 'vue'
import api from '@/http/axios'
import { useRouter } from 'vue-router';


const router = useRouter()

const user_name = ref(localStorage.getItem('user_name'))

const logout = async () => {
  const { data } = await api.post('logout')
  await router.push('/auth')
}
</script>


<template>
  <nav class="w-full shadow-2xl p-3">
    <div class="w-2/3 p-1 flex justify-between mx-auto">
      <div>
        home
      </div>
      <div class="flex gap-2">
        <div>
          {{ user_name }}
        </div>
        <div>
          <button @click="logout">logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>