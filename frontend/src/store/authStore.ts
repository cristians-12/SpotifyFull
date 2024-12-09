import { create } from "zustand";

type Auth = {
  isLoggedIn: boolean;
  setLoggedin: (value: boolean) => void;
};

const useAuthStore = create<Auth>((set) => ({
  isLoggedIn: false,
  setLoggedin: (value: boolean) => set(() => ({ isLoggedIn: value })),
}));

export default useAuthStore;
