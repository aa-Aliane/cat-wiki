import create from "zustand";

export const useCatsStore = create((set) => ({
  cats: [],
  selected: {},
  breedRandomImgs: [],
  initCats: (cats) =>
    set((state) => ({
      cats: cats,
    })),
  selectCat: (cat) =>
    set((state) => ({
      selected: cat,
    })),
  initBreedRandomImgs: (imgs) =>
    set((state) => ({
      breedRandomImgs: imgs,
    })),
}));
