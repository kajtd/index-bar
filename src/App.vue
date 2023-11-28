<script setup lang="ts">
import { ref } from "vue";
import { Category, Item } from "./types";
import IndexBar from "./components/IndexBar.vue";

const categories = ref<Category[]>([
  "Popular",
  "Menus & Chicken Mix",
  "The BOX",
  "Pan pizza",
  "Desserts",
  "Drinks",
]);

function generateItems(count: number): Item[] {
  const items: Item[] = [];
  const title = "Item Title";
  const description = "This is a test description";

  for (let i = 1; i <= count; i++) {
    const randomCategoryIndex = Math.floor(
      Math.random() * categories.value.length
    );
    const category = categories.value[randomCategoryIndex];

    items.push({
      id: i,
      title,
      description,
      category,
    });
  }

  return items;
}

const items = ref<Item[]>(generateItems(100));
</script>

<template>
  <main>
    <IndexBar :categories="categories" :items="items" />
  </main>
</template>
