import { User } from "@/types/auth/user-info.type";
import { create } from "zustand";

type Auth = {
  isLoggedIn: boolean;
  setLoggedin: (value: boolean) => void;
  user: User | null;
};

const useAuthStore = create<Auth>((set) => ({
  isLoggedIn: false,
  setLoggedin: (value: boolean) => set(() => ({ isLoggedIn: value })),
  user: null,
}));

export default useAuthStore;
