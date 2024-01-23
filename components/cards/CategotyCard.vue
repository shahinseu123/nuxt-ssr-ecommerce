<template>
    <div class="category-card-container">
       <div class="list">
          <ul>
            <li>
              <CategoryItem />
            </li>
          </ul>
       </div>
    </div>
</template>
<script setup>
import CategoryItem from './CategoryItem.vue';
</script>
<style scoped>
.category-card-container{
  min-width: 250px;
  max-height: 500px;
  overflow-y: auto;
}
.list ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.list ul li{
    padding: 6px 10px;
}
.list ul li div{
    font-size: 15px;
}
.list ul li:hover{
    padding: 6px 10px;
    border-left: 4px solid #007df2;
    background-color: rgb(238, 237, 237);
}
</style>