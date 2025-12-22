<script setup>
import { ref } from 'vue'
import api from '@/http/axios'
import { useRouter } from 'vue-router'
import { auth_apis } from '@/http/apis/auth'
import { useAuthStore } from '@/stores/auth.js'

const auth_store = useAuthStore()

// 1. Import the necessary Font Awesome Component and Function
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// 2. Import the specific icon(s) you need
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faUser } from '@fortawesome/free-regular-svg-icons';

// 3. Add the icon to the library LOCALLY
library.add(faArrowRightFromBracket, faCircleUser, faUser);

const router = useRouter()

const user_name = ref(localStorage.getItem('user_name'))

const logout = async () => {
  // const { data } = await api.post(auth_apis.logout)
  // localStorage.clear()
  // await router.push('/auth')
  await auth_store.handleLogout()
}
</script>


<template>
  <nav class="w-full shadow-2xl p-3 text-lg">
    <div class="w-2/3 p-1 flex justify-between mx-auto">
      <div class="flex items-center gap-5">
        <router-link to="/" class="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-lg" exact-active-class="bg-black text-white">
          home
        </router-link>
        <router-link to="/profile" class="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-lg" exact-active-class="bg-black text-white">
          <FontAwesomeIcon :icon="['far', 'user']"/> Profile
        </router-link>
      </div>
      <div class="flex gap-3 items-center">
        <div class="items-center flex cursor-pointer">
          <FontAwesomeIcon :icon="['far', 'circle-user']" size="2x" />{{ user_name }}
        </div>
        <div class="items-center flex cursor-pointer"  @click="logout">
            <FontAwesomeIcon :icon="['fas', 'arrow-right-from-bracket']" />
            logout
        </div>
      </div>
    </div>
  </nav>
</template>