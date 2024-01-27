<template>
    <div class="main-container product-list width-full  shadow-sm bg-white">
      <div class="flex justify-between items-center">
        <div class="header-top h-14 flex items-center p-4 gap-10">
          <div class="header-text text-2xl font-semibold text-gray-700">
             {{header}}
          </div>
        </div>
      </div>
       <UDivider icon="i-heroicons-rocket-launch" />
       
       <div class="list-body p-2">
           <div>
            <ClientOnly>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                   <div v-for="item in products" :key="item">
                     <ProductCard :product="item" />
                   </div>
                  
                </div>
                <div class="my-3 flex justify-center items-center">
                   <div class="loading font-normal flex justify-center text-sm items-center text-blue-700 border border-blue-700 p-2 w-36">
                     LOAD MORE
                   </div>
                </div>
            </ClientOnly>
           </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import ProductCard from "./ProductCard.vue"

const props = defineProps(["header", "products"])
</script>