<script setup>
import { defineProps, defineEmits } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleUser);

const props = defineProps({
  user_proifle: Object,

})

</script>

<template>
  <div class="flex mx-auto w-full md:w-1/3 mt-10">
    <div class="flex flex-col p-4 bg-white shadow-2xl w-full border-2 border-gray-300/50 rounded-xl">
      <div class="flex flex-col gap-5">
        <div class="text-center w-full mx-auto">
          <FontAwesomeIcon :icon="['fas', 'circle-user']" class="text-gray-500/80" size="6x" />
        </div>
        <div class="flex flex-col gap-2 mx-auto w-full">
          <h2 class="text-3xl font-semibold p-1 text-center">{{ user_proifle.name }}</h2>
          <h3 class="text-lg text-black/60 p-1 text-center">{{ user_proifle.email }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="">
  
</style>