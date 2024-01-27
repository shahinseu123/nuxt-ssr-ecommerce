<template>
    <div class="p-count-down">
        <ClientOnly>
            <div class="flex flex-start gap-2 items-center">
                <div class="text-sm font-normal ">
                    Ending in
                </div>
                <vue-countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                   <div class="flex gap-2 flex-start">
                       <div class="bg-blue-700 text-white font-semibold w-10 h-10 flex items-center justify-center rounded">
                           {{ days }} 
                       </div> 
                       <div class="bg-blue-700 text-white font-semibold w-10 h-10 flex items-center justify-center rounded">
                           {{ hours }} 
                       </div> 
                       <div class="bg-blue-700 text-white font-semibold w-10 h-10 flex items-center justify-center rounded">
                           {{ minutes }} 
                       </div> 
                       <div class="bg-blue-700 text-white font-semibold w-10 h-10 flex items-center justify-center rounded">
                           {{ seconds }}
                       </div> 
                   </div>
                </vue-countdown>
            </div>
        </ClientOnly>
    </div>
</template>
<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';

</script>