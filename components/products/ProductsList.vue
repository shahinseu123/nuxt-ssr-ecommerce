<template>
    <div class="main-container product-list width-full  shadow-sm bg-white">
      <div class="flex justify-between items-center">
        <div class="header-top h-14 flex items-center p-4 gap-10">
          <div class="header-text text-2xl font-semibold text-gray-700">
             <div>Flash Sale</div> 
             <div class="text-xs text-blue-700 font-normal border border-blue-700 flex justify-center items-center">Up to 65% off</div> 
          </div>
          <div>
             <CountDown />
          </div>
        </div>
        <div>
          <NuxtLink to="/product/flash-sale">
            <div class="cursor-pointer text-sm font-normal text-blue-700 border border-blue-700 py-1 px-4 mr-3 ">
              Shop More
            </div>
          </NuxtLink>
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
import CountDown from '../others/CountDown.vue';
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
<style >
.swiper-button-disabled{
  display: none;
}
</style>