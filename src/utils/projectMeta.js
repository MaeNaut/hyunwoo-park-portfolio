export function getProjectImages(project) {
    return Array.isArray(project.image) ? project.image : [project.image];
}

export function getProjectBadge(project, { detail = false } = {}) {
    const isTeamProject = project.collaboration === "team";

    return {
        label: detail
            ? (isTeamProject ? "Team Project" : "Solo Project")
            : (isTeamProject ? "Team" : "Solo"),
        className: isTeamProject
            ? "border-red-400 bg-neutral-950 text-red-300 shadow-lg shadow-red-950/45"
            : "border-blue-400 bg-neutral-950 text-blue-300 shadow-lg shadow-blue-950/45",
    };
}
