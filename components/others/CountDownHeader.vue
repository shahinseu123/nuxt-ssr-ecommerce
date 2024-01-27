<template>
    <div class="bg-white shadow">
        <div class="main-container count-down-header h-14 flex justify-start gap-5 items-center">
          <div class="h-full border-b-2 border-blue-700 text-sm text-blue-700 font-semibold flex items-center">On Sale Now</div>  
          <CountDown />
        </div>
    </div>
</template>
<script setup>
import CountDown from "./CountDown.vue"
</script>