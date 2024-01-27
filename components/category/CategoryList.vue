
import type { CategoryList } from '#build/components';
<template>
    <div class="main-container product-list width-full  shadow-sm bg-white">
       <div class="header-top h-14 flex items-center  p-4">
         <div class="header-text text-2xl font-semibold text-gray-700">
            Top Category
         </div>
       </div>
       <!-- <UDivider icon="i-heroicons-rocket-launch" /> -->
       
       <div class="list-body">
           <div>
            <ClientOnly>
              <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
                <div>
                  <CategoryCard />
                </div>
              </div>
            </ClientOnly>
           </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import CategoryCard from "./CategoryCard.vue"

</script>