import { Link, useLocation } from "react-router-dom";
import ProjectBadge from "./ProjectBadge";
import ProjectCover from "./ProjectCover";
import { saveScrollPosition } from "../utils/scrollMemory";

export default function ProjectCard({ project }) {
  const location = useLocation();

  return (
    <Link
      to={`/projects/${project.slug}`}
      state={{ fromPath: location.pathname }}
      onClick={() => saveScrollPosition(location.pathname)}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <ProjectBadge project={project} className="absolute right-4 top-4 z-10" />

      <div className="aspect-[16/9] overflow-hidden">
        <ProjectCover project={project} hoverScale />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[3rem]">
            <p className="text-sm text-neutral-400">{project.period}</p>

            {project.course && (
              <p className="text-xs text-neutral-500">{project.course}</p>
            )}
        </div>

        <h3 className="mt-1 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-neutral-300">{project.summary}</p>

        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-neutral-200">Role</p>
          <p className="text-sm text-neutral-300">{project.role}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
