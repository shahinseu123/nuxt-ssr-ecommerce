<template>
    <div class=" header-top bg-blue-600 h-32">
        <div class=" first-nav border-b border-white h-20">
          <div class="main-container nav--items h-full flex justify-between items-center">
            <div class="nav--icon w-32">
               <img class="w-32" src="/img/EM-LOGO-1.png" alt="">
            </div>
            <div class="nav--items-container">
               <ul class="flex justify-between gap-5">
                    <li>
                        <div class="item-btn flex jusify-center item-center  cursor-pointer">
                            <ClientOnly>
                                <UPopover>
                                    <div label="Open" class="btn-icon flex jusify-center items-center text-white font-semibold">
                                      <UIcon name="i-heroicons-squares-2x2" />
                                    </div>
                                    <div class="btn-text text-white font-semibold text-sm">
                                        Department 
                                    </div>
                                    <template #panel>
                                    <div>
                                        <CategotyCard />
                                    </div>
                                    </template>
                                </UPopover>
                            </ClientOnly>
                        </div>
                    </li>
                    <li>
                        <div class="item-btn flex jusify-center items-center gap-1 cursor-pointer">
                            <div class="btn-icon flex jusify-center items-center text-white font-semibold">
                                <UIcon name="i-heroicons-arrow-path-rounded-square" />
                            </div>
                            <div class="btn-text text-white font-semibold text-sm">
                                Services
                            </div>
                        </div>
                    </li>
               
               </ul>
            </div>
            <div class="nav--search w-96">
               <div class="search-input relative">
                <div class="search-icon absolute top-0 right-0 h-full w--search cursor-pointer flex justify-center items-center bg-blue-600 border-2 border-white rounded-full">
                    <UIcon name="i-heroicons-magnifying-glass text-white " />
                </div>
                <input type="text" placeholder="Search everything in iCircles merket..." class="w-full px-2 py-2  rounded-full">
               </div>
            </div>
            <div class="nav--items-container">
               <ul class="flex justify-between gap-10">
                    <li>
                        <div class="item-btn flex jusify-center item-center gap-1 cursor-pointer gap-2">
                            <div class="btn-icon flex jusify-center items-center text-white font-semibold">
                                <UIcon name="i-heroicons-heart" />
                            </div>
                            <div class="btn-text text-white">
                                <div class="fabo text-xs font-extralight">
                                    Favourite
                                </div>
                                <div class="fabo text-sm">
                                    My Items
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-btn flex jusify-center items-center gap-1 cursor-pointer">
                            <div class="btn-icon flex jusify-center items-center text-white font-semibold">
                                <UIcon name="i-heroicons-user" />
                            </div>
                            <div class="btn-text text-white">
                                <div class="fabo text-xs font-extralight">
                                    Sign In
                                </div>
                                <div class="fabo text-sm">
                                    Account
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-btn  cursor-pointer">
                            <div class="btn-icon flex flex-col text-white font-semibold relative">
                                <span class="absolute tr--107 w-5 h-5 bg-red-600 rounded-full text-white flex justify-center items-center font-normal text-xs">
                                    10
                                </span>
                                <UIcon name="i-heroicons-shopping-cart" />
                            </div>
                            <div class="btn-text text-white font-semibold text-sm">
                                $00
                            </div>
                        </div>
                    </li>
               </ul>
            </div>

          </div>
        </div>
        <div class="second-nav main-container flex justify-start justify-items-center h--48">
            <div class="flex justify-between w--100">
                <div class="how-you-want flex justify-start items-center h-full gap-2 cursor-pointer pos_rel">
                    <span class="pos_abs_address_box shadow-md  bg-blue-600">
                        <ClientOnly>
                            <address-card />
                        </ClientOnly>
                    </span>
                    <div class="avater flex justify-start justify-items-center">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/739984?v=4"
                            alt="Avatar"
                        />
                    </div>
                    <div class="title-with-bottom-arrow text-white text-xs font-semibold">
                        How do you want your item?
                    </div>
                    <div class="text-white">
                        <UIcon name="i-heroicons-chevron-down-20-solid" />
                    </div>
                    <div class="text-white">|</div>
                    <div class="text-white">
                        <UIcon name="i-heroicons-map-pin" />
                    </div>
                    <div class="text-white text-xs">
                        Uttara, Dhaka, Bangladesh
                    </div>
                </div>
                
                <div class="nav-items flex justify-end">
                    <ul class="p-0 m-0 flex justify-end items-center gap-3">
                        <li class="text-white text-xs font-bold">
                            <nuxt-link to="#">Deals</nuxt-link>
                        </li>
                        <li class="text-white text-xs font-bold">
                            <nuxt-link to="#">Grocery & Essentials</nuxt-link>
                        </li>
                        <li class="text-white text-xs font-bold">
                            <nuxt-link to="#">Valentin's Day</nuxt-link>
                        </li>
                        <li class="text-white text-xs font-bold">
                            <nuxt-link to="#">Winter Perp</nuxt-link>
                        </li>
                        <li class="text-white text-xs font-bold">
                            <nuxt-link to="#">Cold Cough & Flu</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import CategotyCard from "@/components/cards/CategotyCard.vue"
import AddressCard from "@/components/cards/AddressCard.vue" 
</script>
<style scoped>
 .h--48{
    height: 48px;
 }
 .pos_rel{
    position: relative;
 }
 .pos_abs_address_box{
    position: absolute;
    top: 35px;
    left: 0;
    width: 400px;
    height: auto;
    /* background: white; */
    border-radius: 5px;
    padding:10px;
    z-index:1;
    display: none;
 }
 .pos_rel:hover .pos_abs_address_box{
    display: block;
 }
 .nav--items-container ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
 }
 /* .item-btn:hover{
    background: #007df2;
    padding: 10px;
    border-radius: 5px;
 } */
 .w--search{
    width: 43px;
 }

 .tr--107{
    top: -10px;
    right: -7px;
 }
</style>