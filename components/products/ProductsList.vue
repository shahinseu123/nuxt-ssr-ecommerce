<template>
    <div class="main-container product-list width-full  shadow-sm bg-white my-5">
       <div class="header-top h-14 flex items-center p-4">
         <div class="header-text text-2xl font-semibold text-gray-700">
            Just For You
         </div>
       </div>
       <UDivider icon="i-heroicons-rocket-launch" />
       
       <div class="list-body p-2">
           <div>
            <ClientOnly>
              <swiper
                :modules="modules"
                
                :space-between="10"
                :breakpoints="breakpoints"
                navigation
                >
                <swiper-slide v-for="item in 10">
                  <ProductCard />
                </swiper-slide>
              </swiper>
            </ClientOnly>
           </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, Scrollbar, A11y]

const breakpoints = {
                      1200: {
                        slidesPerView: 6,
                      },
                      900: {
                        slidesPerView: 5,
                      },
                      640: {
                        slidesPerView: 3,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                    }

</script>