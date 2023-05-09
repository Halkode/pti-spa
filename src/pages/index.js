import PostsList from "../components/templates/PostsList";
import posts from "../data/posts.json";
export default function Home() {
  return (
    <PostsList
        posts={posts}
        headerTitle="title."
        headerSubtitle="subtitle."
    />
  )
}
