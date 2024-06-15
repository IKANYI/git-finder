import { create } from "zustand";

const useUserNameStore = create((set) => ({
  username: "", 

  setUsername: (newUsername) => set({ username: newUsername }),
}));

export default useUserNameStore;
