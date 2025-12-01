<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { email } from 'zod';

library.add(faCircleUser);

const user_info = {
  name: localStorage.getItem('user_name'),
  email: localStorage.getItem('email')
}
</script>

<template>
  <div class="flex mx-auto w-1/3 mt-10">
    <div class="flex flex-col gap-10 p-4 bg-white w-full border-2 border-gray-400/50 rounded-xl">
      <h2 class="font-bold">
        Profile
      </h2>
      <div class="flex gap-5">
        <div>
          <FontAwesomeIcon :icon="['fas', 'circle-user']" class="text-gray-500/80" size="6x" />
        </div>
        <div>
          <h2 class="text-3xl font-semibold">{{ user_info.name }}</h2>
          <h3 class="text-lg text-black/60">{{ user_info.email }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>