import { create } from 'zustand';

interface User {
    // the id here is a string because supabase ids are strings
    id: string; 
    email: string;
}

export interface Room {
    id: number;
    name: string;
}

interface ChatStore {
    user: User | null;
    setUser: (user: User | null) => void;

    currentRoom: Room | null;
    setCurrentRoom: (room: Room | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
    user: null, 
    setUser: (user: User | null) => set({ user: user }),

    currentRoom: { id: 1, name: "General" }, 
    setCurrentRoom: (room: Room | null) => set({ currentRoom: room }),
}));