<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import z from 'zod'
import api from '@/http/axios'
import TextboxComponent from './formComponents/TextboxComponent.vue'
import { registrationSchema } from '../validationSchmas/registrationValidationSchema.js'
import { auth_apis } from '../http/apis/auth';

const router = useRouter()

const form_data = ref({
  user_name: '',
  email: '',
  password: '',
  profile_pic_url: '',
})

const errors = ref({})

const server_error = ref('')

const validatedField = (field_name) => {
  const field_schema = z.object({
    [field_name]: registrationSchema.shape[field_name]
  })

  console.log(field_schema);

  const result = field_schema.safeParse({ [field_name]: form_data.value[field_name] })

  console.log(result.success);
  if (!result.success) {
    errors.value[field_name] = result.error.issues[0].message
  } else {
    // Clear the error if valid
    delete errors.value[field_name];
  }

  console.log(errors.value);

}

const register = async () => {
  
  const result = registrationSchema.safeParse(form_data.value);
  errors.value = {};
  server_error.value = ''

  if (!result.success) {
    result.error.issues.forEach(issue => {
      errors.value[issue.path[0]] = issue.message;
    });
    console.log("Validation Failed.");
    return;
  }

  try {
    const req_data = {
      name: form_data.value.user_name,
      email: form_data.value.email,
      password: form_data.value.password
    }

    const { data } = await api.post(auth_apis.register, req_data)
    localStorage.setItem('auth_token', data.data.token)
    localStorage.setItem('user_name', data.data.user_name)
    localStorage.setItem('email', data.data.email)

    await router.push('/')
    // redirect kyan

  } catch (error) {
    console.log(error.response.data.message);
    server_error.value = error.response.data.message
  }

}

</script>

<template>
  <div class=" bg-white/80 p-3 rounded-xl md:p-5">
    <p class="text-2xl font-semibold">Create account</p>
    <p class="text-lg text-gray-400 mb-5">Join our community and start sharing</p>
    <p v-if="server_error" class="p-3 text-center border border-red-500 bg-red-300/30 mb-5 text-red-500 rounded-lg">{{ server_error }}</p>
    <form @submit.prevent="register" class="flex flex-col gap-3">
      <TextboxComponent v-model="form_data.user_name" @blur="validatedField('user_name')" label="Username" name="username" type="text" placeholder="Choose a username" :error_message="errors.user_name" />
      <TextboxComponent v-model="form_data.email" @blur="validatedField('email')" label="Email" name="email" type="email" placeholder="Enter your email" :error_message="errors.email" />
      <TextboxComponent v-model="form_data.password" @blur="validatedField('password')" label="Password" type="password" placeholder="Enter your password" :error_message="errors.password" />
      <button type="submit" class="w-full bg-black p-2 text-white rounded-lg mt-3 cursor-pointer">Create account</button>
    </form>
  </div>
</template>