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

const items = ref<Item[]>([
  {
    id: 1,
    title: "Chicken Burger",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 2,
    title: "Chicken Mix",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 3,
    title: "Meal Box",
    description: "This is a test description",
    category: "The BOX",
  },
  {
    id: 4,
    title: "Pepperoni Pizza",
    description: "This is a test description",
    category: "Desserts",
  },
  {
    id: 5,
    title: "Cheese Pan Pizza",
    description: "This is a test description",
    category: "Pan pizza",
  },
  {
    id: 6,
    title: "Chocolate Cake",
    description: "This is a test description",
    category: "Desserts",
  },
  {
    id: 7,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 8,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 9,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 10,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 8,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 9,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 10,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 11,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 12,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 13,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 14,
    title: "Chocolate Cake",
    description: "This is a test description",
    category: "Desserts",
  },
  {
    id: 15,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 16,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 17,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 18,
    title: "Coca Cola",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 19,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 20,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 21,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 22,
    title: "Pepsi",
    description: "This is a test description",
    category: "Popular",
  },
  {
    id: 23,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 24,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 25,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 26,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 27,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 28,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 29,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 30,
    title: "Pepsi",
    description: "This is a test description",
    category: "Menus & Chicken Mix",
  },
  {
    id: 31,
    title: "Pepsi",
    description: "This is a test description",
    category: "The BOX",
  },
  {
    id: 32,
    title: "Pepsi",
    description: "This is a test description",
    category: "The BOX",
  },
  {
    id: 33,
    title: "Pepsi",
    description: "This is a test description",
    category: "The BOX",
  },
  {
    id: 34,
    title: "Pepsi",
    description: "This is a test description",
    category: "The BOX",
  },
  {
    id: 35,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 36,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 37,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 38,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 39,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 40,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 41,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 42,
    title: "Pepsi",
    description: "This is a test description",
    category: "Drinks",
  },
  {
    id: 43,
    title: "Pepperoni Pizza",
    description: "This is a test description",
    category: "Desserts",
  },
  {
    id: 44,
    title: "Pepperoni Pizza",
    description: "This is a test description",
    category: "Desserts",
  },
  {
    id: 45,
    title: "Pepperoni Pizza",
    description: "This is a test description",
    category: "Pan pizza",
  },
  {
    id: 46,
    title: "Pepperoni Pizza",
    description: "This is a test description",
    category: "Pan pizza",
  },
  {
    id: 47,
    title: "Pepperoni Pizza",
    description: "This is a test description",
    category: "Pan pizza",
  },
]);
</script>

<template>
  <main>
    <IndexBar :categories="categories" :items="items" />
  </main>
</template>
