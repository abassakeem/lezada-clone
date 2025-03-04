<template>
    <div
      class="relative h-96 my-16 w-full bg-cover bg-center bg-no-repeat flex justify-center text-center items-center"
      :style="{
        backgroundImage: `url('https://lezada.jamstacktemplates.dev/assets/images/countdown/bg-countdown-2.jpg')`,
      }"
    >
      <div class="absolute left-1/2 flex flex-col items-center justify-center bg-opacity-50 p-6 rounded-lg ">
        <h3 class="text-center text-5xl mb-4">Deal of the Day</h3>
        <p class="text-lg mb-2">Deal ends at 12 AM</p>
        <div class="flex space-x-10 text-3xl font-light text-[#7e7e7e]">
          <div class="flex flex-col items-center">
            <span class="text-6xl">{{ timeLeft.days }}</span>
            <small class="text-sm text-[#9b9b9b]">Days </small>
           
          </div>
          <div class="">:</div>
          <div class="flex flex-col items-center">
            <span class="text-6xl">{{ timeLeft.hours }}</span>
            <small class="text-sm text-[#9b9b9b]">Hours</small>
          </div>
          <div class="">:</div>
          <div class="flex flex-col items-center">
            <span class="text-6xl">{{ timeLeft.minutes }}</span>
            <small class="text-sm text-[#9b9b9b]">Minutes</small>
          </div>
          <div class="">:</div>
          <div class="flex flex-col items-center">
            <span class="text-6xl">{{ timeLeft.seconds }}</span>
            <small class="text-sm text-[#9b9b9b]">Seconds</small>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  let timer;
  
  const updateCountdown = () => {
    const now = new Date();
    let target = new Date();
    target.setHours(24, 0, 0, 0); 
  
    if (now >= target) {
      
      target.setDate(target.getDate() + 1);
    }
  
    const timeDiff = target - now;
    timeLeft.value.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeLeft.value.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timeLeft.value.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    timeLeft.value.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  };
  
  onMounted(() => {
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
  });
  
  onUnmounted(() => {
    clearInterval(timer);
  });
  </script>
  
  <style scoped>

  </style>
  