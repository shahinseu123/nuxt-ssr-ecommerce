<template>
    <div class="product-card w-full rounded overflow-hidden bg-white shadow">
      <div class="product-image w-full object-cover">
          <img src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg" alt="product name" />
      </div>
      <div class="product-details p-2">
        <div class="p-name text-sm font-normal text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div class="p-price text-lg font-semibold text-blue-700 mt-2">৳120</div>
        <div class="p-discount text-xs font-light text-gray-900"><span class="line-through">-৳12</span> <span class="text-sm font-normal">50%</span></div>
        <div class="p-stars mt-2">
          <div class="flex flex-start gap-2 items-center">
            <div>
              <UIcon name="i-heroicons-star" class="text-blue-600" />
            </div>
            <div>
              <UIcon name="i-heroicons-star" />
            </div>
            <div>
              <UIcon name="i-heroicons-star" />
            </div>
            <div>
              <UIcon name="i-heroicons-star" />
            </div>
            <div>
              <UIcon name="i-heroicons-star" />
            </div>
            <div>
              <UIcon name="i-heroicons-chevron-right-20-solid" />
            </div>
            <div class="text-xs bg-blue-700 rounded-full p-1 text-white">47</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
</style>