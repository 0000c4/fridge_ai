<template>
  
    <StartupScreen v-if="!image" @setImage="(event) => { image = event }" />

    <div v-else>
      <img class="fridge" :src="image" alt="" srcset="" @click="showModal = !showModal">
      <Transition>
        <Modal v-if="showModal" @closeModal="showModal = !showModal" />
      </Transition>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Modal from './Modal.vue';
import StartupScreen from './StartupScreen.vue';

const showModal = ref(false)
const image = ref('')

</script>

<style scoped>
.fridge {
  width: 100%;
  height: 93vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
