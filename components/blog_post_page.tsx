import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { blogsData } from "@/lib/data";
import markdownToHtml from '@/lib/markdownToHtml'; // Placeholder for Markdown to HTML conversion

export default function BlogPostPage() {
const router = useRouter();
const { slug } = router.query;
const [post, setPost] = useState<null | typeof blogsData[number]>(null);
const [content, setContent] = useState('');

useEffect(() => {
    if (!slug) return;
    const post = blogsData.find(p => p.slug === slug);
    if (post) {
        setPost(post);
        markdownToHtml(post.markdownContent).then(setContent);
    }
}, [slug]);

if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div> {content} </div>
    </div>
  );
}
