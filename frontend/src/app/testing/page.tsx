// /app/blog/page.js
import Link from "next/link";

async function getPosts() {
  const posts = [
    { id: "1", title: "Primer post" },
    { id: "2", title: "Segundo post" },
    { id: "3", title: "Tercer post" },
  ];
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts(); // Obtén datos en el servidor

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/testing/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
