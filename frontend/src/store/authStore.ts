import { create } from "zustand";

type Auth = {
  isLoggedIn: boolean;
};

const useAuthStore = create<Auth>((set) => ({
  isLoggedIn: false,
}));

export default useAuthStore;
