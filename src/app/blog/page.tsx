import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Page() {
  const sortedBlogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter">All Blogs</h1>
      <div className="flex flex-col gap-6">
        {sortedBlogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog._id}>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tighter">
                {blog.title}
              </h2>
              <p>{blog.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
