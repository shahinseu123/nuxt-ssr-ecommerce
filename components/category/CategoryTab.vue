<template>
    <div class="category-tab-container bg-white flex items-center justify-center h-10">
        <div class="tab-body main-comtainer">
            <ul class="m-0 p-0 list-none flex justify-center items-center gap-10">
                <CategoryTabItem v-for="(item, index) in flashCategory" :key="index" @update-tab="updateTab" :currentIndex="index" :isActive="currentIndex == index ? true : false" :title="item" />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import CategoryTabItem from "./CategoryTabItem.vue"

const flashCategory = ref(["All", "Electronics", "Fashion", "Home & Living", "Supermarket", "Stationary & Toys", "Sports & Motors"])
const currentIndex = ref(0)
function updateTab(index:number):void {
   currentIndex.value = index 
}
</script>
<style scoped>
.active-nav{
  color: #015db3;
}
</style>