import BlogPostPage from "@/components/blog_post_page"; // Ensure this path matches where you have saved the BlogPostPage component
import { useRouter } from "next/router";
import RootLayout from "@/app/layout";
export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  return (
  <RootLayout>
    <BlogPostPage />
  </RootLayout>);
}
