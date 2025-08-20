import { create } from "zustand";

type CounterStore = {
  theme: string;
  setTheme: (new_theme: string) => void;
  indexData: object,
  setIndexData: (new_index_data: object) => void;
  userData: object,
  setUserData: (new_user_data: object) => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  theme: "dark",
  setTheme: (new_theme) => {
    set((state) => ({theme: new_theme}))
  },
  indexData: {},
  setIndexData: (new_index_data) => {
    set((state) => ({indexData: new_index_data}))
  },
  userData: {},
  setUserData: (new_user_data) => {
    set((state) => ({userData: new_user_data}))
  }
}))