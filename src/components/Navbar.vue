<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const auth_store = useAuthStore()

// 1. Import the necessary Font Awesome Component and Function
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// 2. Import the specific icon(s) you need
import { faArrowRightFromBracket, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faUser } from '@fortawesome/free-regular-svg-icons';

// 3. Add the icon to the library LOCALLY
library.add(faArrowRightFromBracket, faCircleUser, faUser, faBars, faClose);

const show_nav_list = ref(false)

const logout = async () => {
  await auth_store.handleLogout()
}
</script>


<template>
  <nav class="w-full shadow-2xl md:p-3 text-lg">
    <div class="w-full md:w-2/3 p-1 hidden md:flex justify-between mx-auto">
      <div class="flex items-center gap-5">
        <router-link to="/" class="flex capitalize items-center gap-2 cursor-pointer py-1 px-2 rounded-lg" exact-active-class="bg-black text-white">
          home
        </router-link>
        <router-link to="/profile" class="flex capitalize items-center gap-2 cursor-pointer py-1 px-2 rounded-lg" exact-active-class="bg-black text-white">
          <FontAwesomeIcon :icon="['far', 'user']"/> Profile
        </router-link>
      </div>
      <div class="flex gap-3 items-center">
        <div class="items-center flex cursor-pointer"  @click="logout">
            <FontAwesomeIcon :icon="['fas', 'arrow-right-from-bracket']" />
            logout
        </div>
      </div>
    </div>
    <!-- mobile nav -->
    <div class="md:hidden">
      <div class="flex w-full px-2 py-3" @click="show_nav_list = !show_nav_list">
        <FontAwesomeIcon :icon="['fas', 'fa-bars']" class="text-2xl" v-if="!show_nav_list"/>
        <FontAwesomeIcon :icon="['fas', 'fa-close']" class="text-2xl" v-if="show_nav_list"/>
      </div>
      <div :class="{ 'hidden': !show_nav_list }" class="mt-2">
        <router-link to="/" class="flex capitalize items-center cursor-pointer p-3 md:py-1 md:px-2 md:rounded-lg" exact-active-class="bg-black text-white">
          home
        </router-link>
        <router-link to="/profile" class="flex capitalize items-center cursor-pointer p-3 md:py-1 md:px-2 md:rounded-lg" exact-active-class="bg-black text-white">
          profile
        </router-link>
      </div>
    </div>
  </nav>
</template>