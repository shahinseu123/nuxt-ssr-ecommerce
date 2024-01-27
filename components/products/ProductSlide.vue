<template>
    <div class="my-product-slider">
        <ClientOnly>
            <swiper
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }"
              :zoom="true"
              :loop="true"
              :spaceBetween="10"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules"
              class="mySwiper2"
            >
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-1.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-2.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-3.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-4.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-5.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-6.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-7.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-8.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-9.jpg" width="500" />
               </swiper-slide>
               <swiper-slide>
                 <VueMagnifier src="https://swiperjs.com/demos/images/nature-10.jpg" width="500" />
               </swiper-slide>
            
               
            </swiper>
            <swiper
              @swiper="setThumbsSwiper"
              :loop="true"
              :spaceBetween="10"
              :slidesPerView="6"
              :freeMode="true"
              :watchSlidesProgress="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
              ><swiper-slide
                ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
              /></swiper-slide>
            </swiper>
        </ClientOnly>
    </div>
  </template>
  <script>
    import VueMagnifier from '@websitebeaver/vue-magnifier'
    import '@websitebeaver/vue-magnifier/styles.css'
    import { ref } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/free-mode';
    import 'swiper/css/navigation';
    import 'swiper/css/thumbs';
  
    // import './style.css';
  
    // import required modules
    import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
        VueMagnifier,
      },
      setup() {
        const thumbsSwiper = ref(null);
  
        const setThumbsSwiper = (swiper) => {
          thumbsSwiper.value = swiper;
        };
  
        return {
          thumbsSwiper,
          setThumbsSwiper,
          modules: [FreeMode, Navigation, Thumbs, Zoom],
        };
      },
    };
  </script>
  <style>
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.my-product-slider:hover .swiper-button-prev{
    display:block;
}
.my-product-slider:hover .swiper-button-next{
    display:block;
}
.swiper-button-prev{
  display:none;
}
.swiper-button-next{
  display:none;
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    content: 'next';
    font-size: 25px;
}
.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    content: 'prev';
    font-size: 25px;
}
</style>
  