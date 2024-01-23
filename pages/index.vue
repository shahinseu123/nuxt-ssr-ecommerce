<template>
    <div class="home-wrapper"> 
       <ProductsList />
    </div>
</template>

<script lang="ts" setup>
import ProductsList from '~/components/products/ProductsList.vue';
import type { Products, NullInterface } from '~/interface/product';    
import { useProductStore } from '~/store/product';
const product = useProductStore()


const { data: posts } : { data: Products[]|NullInterface } = await useFetch<Products[]|NullInterface>('https://jsonplaceholder.typicode.com/posts') 

onMounted(() => {
    product.act_products(posts) 
})
</script>