import create from "zustand";

export const useTabStore = create((set) => ({
  currentTab: 1,
  setCurrentTab: (newTab) =>
    set((state) => ({
      currentTab: newTab,
    })),
}));
