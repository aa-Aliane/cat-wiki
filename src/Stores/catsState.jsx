import create from "zustand";

export const useCatsStore = create((set) => ({
  cats: [],
  selected: {},
  initCats: (cats) =>
    set((state) => ({
      cats: cats,
    })),
  selectCat: (cat) =>
    set((state) => ({
      selected: cat,
    })),
}));
