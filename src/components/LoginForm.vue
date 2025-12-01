<script setup>
import { ref } from 'vue'
import z from 'zod'
import TextboxComponent from './formComponents/TextboxComponent.vue'
import { loginSchema } from '../validationSchmas/loginValdationSchema.js'

const form_data = ref({
  email: '',
  password: ''
})

const errors = ref({})

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

const login = () => {
  console.log('asfg');
  const result = loginSchema.safeParse(form_data.value);
  errors.value = {};

  if (!result.success) {
    result.error.issues.forEach(issue => {
      errors.value[issue.path[0]] = issue.message;
    });
    console.log("Validation Failed.");
    return;
  }

  console.log("Success Login", result.data);
}

</script>

<template>
  <!-- bg-white/40 -->
  <div class=" bg-white/80 p-3 rounded-xl md:p-5">
    <p class="text-2xl font-semibold">Welcome Back</p>
    <p class="text-lg text-gray-400 mb-5">Enter your crendentials to access your account</p>
    <form @submit.prevent="login" class="flex flex-col gap-3">
      {{ form_data.email }}
      <TextboxComponent v-model="form_data.email" @blur="validatedField('email')" label="Email" name="email" type="email" placeholder="Enter your email" :error_message="errors.email" />
      {{ form_data.password }}
      <TextboxComponent v-model="form_data.password" @blur="validatedField('password')" label="Password" type="password" placeholder="Enter your password" :error_message="errors.password" />
      <button type="submit" class="w-full bg-black p-2 text-white rounded-lg">Sign in</button>
    </form>
  </div>
</template>