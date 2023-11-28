export type Category =
  | "Popular"
  | "Menus & Chicken Mix"
  | "The BOX"
  | "Classic pizza medium"
  | "Pan pizza"
  | "Desserts"
  | "Drinks";

export type Item = {
  id: number;
  title: string;
  description: string;
  category: Category;
};