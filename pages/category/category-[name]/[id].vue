<template>
    <div class="category-wrapper main-container">
        <div class="lg:flex xl:flex lg:gap-2 xl:gap-2">
            <!-- left part  -->
            <div class="left-side sm:w-full md:w-full lg:w-1/4 xl:1/4">
                <div class="bg-white shadow my-3">
                    <div class="p-2">
                        <h3 class="text-xl font-semibold text-gray-800">Filters</h3>
                    </div>
                    <div class=" border-b border-gray-300 p-2">
                        <h3 class="text-md font-normal text-gray-700">Promotions & Services</h3>
                    </div>
                    <!-- buttons  -->
                    <div class="side-buttons">
                        <div>
                            <button class="right-btns cursor-pointer p-2 rounded mt-2 ml-2 border border-gray-300">
                                <div class="flex justify-center  items-center  gap-2">
                                    <div class="icon-image w-4 overflow-hidden">
                                      <img class="w-full" src="/btns/free-2.png" alt="alt">
                                    </div>
                                    <div class="text text-xs">Free Delivery</div>
                                </div>
                            </button>
                            <button class="right-btns cursor-pointer p-2 rounded mt-2 ml-2 border border-gray-300">
                                <div class="flex justify-center  items-center  gap-2">
                                    <div class="icon-image w-4 overflow-hidden">
                                      <img class="w-full" src="/btns/hot-deal.png" alt="alt">
                                    </div>
                                    <div class="text text-xs">Hot Deals</div>
                                </div>
                            </button>
                            <button class="right-btns cursor-pointer p-2 rounded mt-2 ml-2 border border-gray-300">
                                <div class="flex justify-center  items-center  gap-2">
                                    <div class="icon-image w-4 overflow-hidden">
                                      <img class="w-full" src="/btns/price-tag.png" alt="alt">
                                    </div>
                                    <div class="text text-xs">Best Price Guranteed</div>
                                </div>
                            </button>
                            <button class="right-btns cursor-pointer p-2 rounded mt-2 ml-2 border border-gray-300">
                                <div class="flex justify-center  items-center  gap-2">
                                    <div class="icon-image w-4 overflow-hidden">
                                      <img class="w-full" src="/btns/authentic.png" alt="alt">
                                    </div>
                                    <div class="text text-xs">Authentic Brands</div>
                                </div>
                            </button>
                            <button class="right-btns cursor-pointer p-2 rounded mt-2 ml-2 border border-gray-300">
                                <div class="flex justify-center  items-center  gap-2">
                                    <div class="icon-image w-4 overflow-hidden">
                                      <img class="w-full" src="/btns/security.png" alt="alt">
                                    </div>
                                    <div class="text text-xs">iCircles Varified</div>
                                </div>
                            </button>
                            <button class="right-btns cursor-pointer p-2 rounded mt-2 ml-2 border border-gray-300">
                                <div class="flex justify-center  items-center  gap-2">
                                    <div class="icon-image w-4 overflow-hidden">
                                      <img class="w-full" src="/btns/cash-on-delivery.png" alt="alt">
                                    </div>
                                    <div class="text text-xs">Cash on Delivery</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <!-- buttons end -->
                    <!-- categpry  -->
                    <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Category</h4>
                    </div>
                    <div class="p-2">
                        <h5 class="text-blue-700 text-sm font-semibold">Electronic excessory</h5>
                    </div>
                    <!-- brands  -->
                    <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Brands</h4>
                    </div>
                    <div class="p-2">
                        <div class="inputs">
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Square" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Beximco" label="Beximco" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Basundhara" label="Basundhara" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Jamuna" label="Jamuna" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Padma" label="Padma" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Akij" label="Akij" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Monno Ceramics" label="Monno Ceramics" />
                            </div>
                        </div>
                    </div>
                     <!-- color family  -->
                     <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Color Family</h4>
                    </div>
                    <div class="p-2">
                        <div class="color-buttons">
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-black rounded"></div>
                                    <div class="text text-xs">Black</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-blue-700 rounded"></div>
                                    <div class="text text-xs">Blue</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-red-600 rounded"></div>
                                    <div class="text text-xs">Red</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-yellow-600 rounded"></div>
                                    <div class="text text-xs">Yellow</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-purple-600 rounded"></div>
                                    <div class="text text-xs">Purple</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-teal-600 rounded"></div>
                                    <div class="text text-xs">Teal</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-gray-600 rounded"></div>
                                    <div class="text text-xs">Gray</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-brown-600 rounded"></div>
                                    <div class="text text-xs">Brown</div>
                                </div>
                            </button>
                            <button class="border border-gray-300 p-1 mr-2 mb-2 rounded">
                                <div class="flex justify-center items-center gap-2 ">
                                    <div class="color w-4 h-4 bg-gray-600 rounded"></div>
                                    <div class="text text-xs">Gray</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <!-- price range  -->
                    <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Price Range</h4>
                    </div>
                    <div class="p-2">
                        <div class="grid grid-cols-3 gap-2">
                            <div>
                                <input  class="w-full p-1 border border-gray-300 rounded" type="number" placeholder="Min">
                            </div>
                            <div>
                                <input class="w-full p-1 border border-gray-300 rounded" type="number" placeholder="Max">
                            </div>
                            <div>
                                <button class="bg-blue-700 p-1 text-white rounded w-full">Apply</button>
                            </div>
                        </div>
                    </div>
                    <!-- price range  -->
                    <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Rating</h4>
                    </div>
                    <div class="p-2">
                       <div class="icons-star">
                        <div class="five-star flex column gap-2 mb-3 cursor-pointer">
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                        </div>
                        <div class="five-star flex column gap-2 mb-3 cursor-pointer">
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <div class="text-xs font-normal text-gray-500">And Up</div>

                        </div>
                        <div class="five-star flex column gap-2 mb-3 cursor-pointer">
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <div class="text-xs font-normal text-gray-500">And Up</div>

                        </div>
                        <div class="five-star flex column gap-2 mb-3 cursor-pointer">
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <div class="text-xs font-normal text-gray-500">And Up</div>

                        </div>
                        <div class="five-star flex column gap-2 mb-3 cursor-pointer">
                            <UIcon name="i-heroicons-star-solid" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <UIcon name="i-heroicons-star" class="text-blue-700" />
                            <div class="text-xs font-normal text-gray-500">And Up</div>
                        </div>
                       </div>
                    </div>
                    <!-- price range  -->
                    <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Warranty Type</h4>
                    </div>
                    <div class="p-2">
                        <div class="">
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="No Warrenty" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Brand Wrarrenty" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Seller Wsrrenty" />
                            </div>
                        </div>
                    </div>
                    <!-- price range  -->
                    <div class="category p-2 border-b border-gray-300 mt-2">
                        <h4 class="text-md font-normal text-gray-800 ">Country of Origin</h4>
                    </div>
                    <div class="p-2">
                        <div class="">
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="China" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Bangladesh" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="India" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Pakistan" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="America" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Others" />
                            </div>
                            <div class="mt-2">
                                <UCheckbox v-model="selected" color="blue"  name="Square" label="Korea" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- left part end -->
            <!-- right part  -->
            <div class="right-side sm:w-full md:w-full lg:w-3/4 xl:3/4">
                <div class="bg-white my-3 shadow p-4">
                    <div class="top-section flex justify-between">
                        <div class="profuct-found text-sm text-gray-600 font-normal">
                            2,111 items found for <span class="text-blue-800 text-sm font-semibold ">Lips</span>
                        </div>
                        <div class="profuct-found text-sm text-gray-600 font-normal">
                            <div class="sort-by flex items-center gap-2">
                                <div>
                                    Sort By
                                </div>
                                <div>
                                    <USelect v-model="sortOption" color="blue" :options="sort_options" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <UDivider icon="i-heroicons-rocket-launch" />
                    <div class="product-container">
                        <div class="options-btns mb-3">
                            <div class="option-button bg-blue-100 inline-block px-2 py-1 rounded-full mr-1">
                                <div class="flex justify-center items-center">
                                   <div class="text-xs text-blue-700 font-normal">Free Delivery</div> 
                                   <div class="flex justify-center items-center">
                                    <UIcon name="i-heroicons-x-mark" class="text-blue-700 cursor-pointer"  />
                                   </div> 
                                </div>
                            </div>
                            <div class="option-button bg-blue-100 inline-block px-2 py-1 rounded-full mr-1">
                                <div class="flex justify-center items-center">
                                   <div class="text-xs text-blue-700 font-normal">Brand:Beximco</div> 
                                   <div class="flex justify-center items-center">
                                    <UIcon name="i-heroicons-x-mark" class="text-blue-700 cursor-pointer"  />
                                   </div> 
                                </div>
                            </div>
                            <div class="option-button bg-blue-100 inline-block px-2 py-1 rounded-full mr-1">
                                <div class="flex justify-center items-center">
                                   <div class="text-xs text-blue-700 font-normal">Country:Turkey</div> 
                                   <div class="flex justify-center items-center">
                                    <UIcon name="i-heroicons-x-mark" class="text-blue-700 cursor-pointer"  />
                                   </div> 
                                </div>
                            </div>
                            <div class="option-button bg-gray-100 cursor-pointer inline-block px-2 py-1 rounded-full mr-1">
                                <div class="flex justify-center items-center text-xs">
                                   Clear All
                                </div>
                            </div>
                        </div>
                        <div class="products-list">
                            <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2">
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                               <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- right part end -->
    </div>
</template>
<script lang="ts" setup>
import ProductCard from "@/components/products/ProductCard.vue"

const sort_options = ['Best Match', 'Top Sales', 'Newest Arrival', 'Price Low to High', 'Price High to Low']

const selected = ref(false)
const sortOption = ref("Best Match")
</script>