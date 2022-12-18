import create from "zustand";

export const useCatsStore = create((set) => ({
  cats: [],
  initCats: (cats) =>
    set((state) => ({
      cats: cats,
    })),
}));
