import create from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  setPosts: (posts) => set((state) => ({ posts })),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));
