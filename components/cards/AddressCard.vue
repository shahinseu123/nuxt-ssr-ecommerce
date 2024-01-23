<template>
    <div class="address_card">
        <div class="shipping-pickup ">
           <div class="">
              <div class="flex justify-center items-center gap-6">
                <div>
                    <div class="rounded-container">
                       <img
                           src="/img/delivery-truck.png"
                           alt="Avatar"
                       />
                    </div>
                    <div class="text-white font-semibold text-sm mt-2">Shipping</div>
                </div>
                <div>
                    <div class="rounded-container">
                       <img
                           src="/img/car.png"
                           alt="Avatar"
                       />
                    </div>
                   <div class="text-white font-semibold text-sm mt-2">Pickup</div>
                </div>
                <div>
                    <div class="rounded-container">
                       <img
                           src="/img/vegetable.png"
                           alt="Avatar"
                       />
                    </div>
                  <div class="text-white font-semibold text-sm mt-2">Delivery</div>
                </div>
              </div>
           </div>
           <div class="add-address bg-white rounded-md p-5 mt-5">
              <div class="flex justify-start items-center gap-2">
                <div>
                    <UIcon name="i-heroicons-map-pin" />
                </div>
                 <div class="text-xs font-semibold">Add an address for shipping and delivery</div>
              </div>
              <div class="add-btn mt-4">
                <UButton block  class="bg-blue-600">Add Address</UButton>
              </div>
           </div>
           
        </div>
    </div>
</template>
<script setup lang="ts">
    
</script>
<style scoped>
.rounded-container{
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 70%;
    height: auto;
}
.flex--center{
    display: flex;
}

</style>