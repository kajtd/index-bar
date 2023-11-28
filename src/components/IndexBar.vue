<script setup lang="ts">
import { Category, Item } from "../types";

type Props = {
  categories: Category[];
  items: Item[];
};

const props = defineProps<Props>();

const itemsByCategory = (category: Category) => {
  return props.items.filter((item) => item.category === category);
};
</script>

<template>
  <van-index-bar :index-list="categories" :sticky="false">
    <div v-for="category in categories" :key="category">
      <van-index-anchor :index="category" />
      <van-cell
        v-for="item in itemsByCategory(category)"
        :title="item.title"
        :key="item.id"
        :label="item.description"
      />
    </div>
  </van-index-bar>
</template>

<style>
main .van-index-bar__sidebar {
  padding: 12px;
  top: 0 !important;
  left: 0;
  transform: translateY(0);
  flex-direction: row;
  background: white;
  overflow-y: auto;
}

main .van-index-bar__index {
  padding: 8px 16px;
}

main .van-index-bar__index--active {
  background: black;
}
</style>
