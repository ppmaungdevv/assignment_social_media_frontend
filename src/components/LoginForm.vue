<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import z from 'zod'
import api from '@/http/axios'
import TextboxComponent from './formComponents/TextboxComponent.vue'
import { loginSchema } from '../validationSchmas/loginValdationSchema.js'

const router = useRouter()

const form_data = ref({
  email: '',
  password: ''
})

const errors = ref({})

const server_error = ref('')

const validatedField = (field_name) => {
  const field_schema = z.object({
    [field_name]: loginSchema.shape[field_name]
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

const login = async () => {
  const result = loginSchema.safeParse(form_data.value);
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
    const { data } = await api.post('login', form_data.value)
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
  <!-- bg-white/40 -->
  <div class=" bg-white/80 p-3 rounded-xl md:p-5">
    <p class="text-2xl font-semibold">Welcome Back</p>
    <p class="text-lg text-gray-400 mb-5">Enter your crendentials to access your account</p>
    <p v-if="server_error" class="p-3 text-center border border-red-500 bg-red-300/30 mb-5 text-red-500 rounded-lg">{{ server_error }}</p>
    <form @submit.prevent="login" class="flex flex-col gap-3">
      <TextboxComponent v-model="form_data.email" @blur="validatedField('email')" label="Email" name="email" type="email" placeholder="Enter your email" :error_message="errors.email" />
      <TextboxComponent v-model="form_data.password" @blur="validatedField('password')" label="Password" type="password" placeholder="Enter your password" :error_message="errors.password" />
      <button type="submit" class="w-full bg-black p-2 text-white rounded-lg cursor-pointer">Sign in</button>
    </form>
  </div>
</template>