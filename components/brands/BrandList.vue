
import type BrandCardVue from './BrandCard.vue';

import type { CategoryList } from '#build/components';
<template>
    <div class="main-container product-list width-full  shadow-sm bg-white">
       <div class="header-top h-14 flex items-center  p-4">
         <div class="header-text text-2xl font-semibold text-gray-700">
            Top Brand
         </div>
       </div>
       <!-- <UDivider icon="i-heroicons-rocket-launch" /> -->
       
       <div class="list-body">
           <div>
            <ClientOnly>
              <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
                <div>
                  <BrandCard />
                </div>
              </div>
            </ClientOnly>
           </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import BrandCard from "./BrandCard"
</script>