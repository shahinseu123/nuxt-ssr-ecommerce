<template>
    <li>
        <div class="text-sm font-normal cursor-pointer" @click="tab(currentIndex)" :class="isActive ? 'text-blue-700': ''">{{title}}</div>
    </li>
</template>
<script setup lang="ts">
interface TabProps{
    title?: string,
    isActive?: boolean,
    currentIndex?: number,
}
const props = withDefaults(defineProps<TabProps>(), {
  title: 'All',
  isActive: false,
  currentIndex: 0,
})

const emit = defineEmits(['update-tab'])

function tab(index:number):void {
  emit("update-tab", index)
}
</script>