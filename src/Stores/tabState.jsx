import create from "zustand";

export const useTabStore = create((set) => ({
  currentTab: "Home",
  setCurrentTab: (state) =>
    set((newTab) => ({
      currentTab: newTab,
    })),
}));
