import create from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  setPosts: (posts) => set((state) => ({ posts })),
  addPost: (post) =>
    set((state) => {
      console.log("added post");
      console.log(post);
      return { posts: [post, ...state.posts] };
    }),
}));
