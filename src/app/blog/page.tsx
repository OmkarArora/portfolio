import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs - Omkar Arora",
  description: "Read tech blogs by me!",
};

export default function Page() {
  const sortedBlogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter">All Blogs</h1>
      <div className="flex flex-col gap-8 md:gap-6">
        {sortedBlogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog._id}>
            <div className="flex max-w-[100%] flex-col gap-4 md:max-w-[unset] md:flex-row">
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="h-32 w-56 rounded object-cover"
                />
              )}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold tracking-tighter">
                  {blog.title}
                </h2>
                <p>{blog.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
