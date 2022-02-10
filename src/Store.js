import create from "zustand";

const useStore = create((set) => ({
  isDark: true,
  sideNav: false,
  isLeft: true,
  modal: false,
  navMode: false,
  setModal: () => set((state) => ({ modal: !state.modal })),
  setSideNav: () => set((state) => ({ sideNav: !state.sideNav })),
  setLeft: (bol) => set(() => ({ isLeft: bol })),
  setDark: (bol) => set(() => ({ isDark: bol })),
  setNavMode: (bol) => set(() => ({ navMode: bol })),
}));

export default useStore;
