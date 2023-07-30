import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/types/projects";

const projects: Project[] = [
  {
    id: "1",
    icon: "/favicon.ico",
    title: "Portfolio",
    description: "My website",
    tags: ["Next.js", "React", "TailwindCSS"],
    url: "",
  },
  {
    id: "2",
    icon: "/images/shotoui.png",
    title: "Shoto UI",
    description: "A React Component library",
    tags: ["React"],
    url: "https://shotoui.netlify.app/gettingstarted",
  },
];

export default function Home() {
  return (
    <main className="">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter">
        Hey, I'm Omkar 👋
      </h1>
      <p className="">
        Welcome! Thrilled to have you here.
        <br />
        I'm a software enginner, a tech enthusiast and a gamer at heart. I
        currently work as a Software Engineer at Sparklin, where I am building
        Openvy, a new age conversations platform.
      </p>
      <h2 className="mb-8 mt-10 text-2xl font-bold tracking-tighter">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((item) => (
          <ProjectCard data={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
