import { Project } from "@/types/projects";
import Image from "next/image";

interface Props {
  data: Project;
}

export default function ProjectCard({ data }: Props) {
  const { id, icon, title, description, tags, url } = data;
  return (
    <a href={url} target="_blank">
      <div className="flex flex-col items-start rounded border border-gray-800 p-4">
        <div className="my-2 grid h-8 w-8 place-items-center">
          <Image
            src={icon}
            alt={title}
            width={400}
            height={400}
            className="h-8 w-8 object-cover "
          />
        </div>
        <h4 className="text-xl font-bold tracking-tight">{title}</h4>
        <p className="pt-4 leading-6">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((item) => (
            <Tag key={`${id}-${item}`} tag={item} />
          ))}
        </div>
      </div>
    </a>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <div className="rounded-md border border-red-800 bg-gray-50 px-1 text-xs italic leading-5 text-gray-700 dark:border dark:border-zinc-700 dark:bg-transparent dark:text-gray-300  ">
      {tag}
    </div>
  );
}
