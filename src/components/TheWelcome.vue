<template>
  <VueDatePicker 
    v-model="date" 
    auto-apply 
    @update:model-value="onHandleUpdateValue"
  />
</template>

<script setup lang="ts">
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { ref } from 'vue';
  
  const date = ref(new Date());

  const onHandleUpdateValue = () => {
    alert('updated model Value - showcase for iOS Safari Bug');
  }
</script>
