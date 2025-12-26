<script setup>
import { onMounted, ref } from 'vue'
import UserProfile from '@/components/UserProfile.vue'
import api from '@/http/axios'
import { user_apis } from '@/http/apis/user.js'

const user_profile = ref({})

const fetchUserProfile = async () => {
  const { data } = await api.get(user_apis.profile, { withCredentials: true })
  user_profile.value = data.data
  console.log(user_profile.value);
}

onMounted(async () => {
  await fetchUserProfile()
})

</script>

<template>
  <UserProfile :user_proifle="user_profile" />
</template>