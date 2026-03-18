export default function ProjectCard({ project, onOpenProject }) {
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const isTeamProject = project.collaboration === "team";
  const badgeLabel = isTeamProject ? "Team" : "Solo";
  const badgeClassName = isTeamProject
    ? "border-red-400 bg-neutral-950 text-red-300 shadow-lg shadow-red-950/45"
    : "border-blue-400 bg-neutral-950 text-blue-300 shadow-lg shadow-blue-950/45";

  return (
    <button
      type="button"
      onClick={() => onOpenProject(project.slug)}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <span className={`absolute right-4 top-4 z-10 inline-flex h-7 min-w-[3.9rem] items-center justify-center rounded-full border px-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] ${badgeClassName}`}>
        <span className="relative top-px leading-none">{badgeLabel}</span>
      </span>

      <div className="aspect-[16/9] overflow-hidden">
        {images.length === 1 ? (
          <img
            src={images[0]}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="grid h-full w-full gap-1 bg-white/5"
            style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
          >
            {images.map((image, index) => (
              <div key={`${project.slug}-${index}`} className="overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
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
    </button>
  );
}
