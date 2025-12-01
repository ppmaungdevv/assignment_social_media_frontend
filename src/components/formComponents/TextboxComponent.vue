<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  error_message: String,
  modelValue: String,
  label: String,
  type: {
    default: 'text',
    type: String
  },
  name: String,
  placeholder: ''
})

const emit = defineEmits(['update:modelValue', 'blur'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="name">{{ label }}</label>
    <!-- @input="handleInput"  -->
    <input
      v-model="inputValue"
      :value="props.modelValue" 
      :type="type" 
      :name="name" 
      :placeholder="placeholder" 
      @blur="$emit('blur')"
      class="border w-full p-2 rounded-lg text-lg">

    <p v-if="error_message" class="text-red-500">{{ error_message }}</p>
  </div>
</template>