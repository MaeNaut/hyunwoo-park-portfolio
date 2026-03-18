import { getProjectBadge } from "../utils/projectMeta";

export default function ProjectBadge({ project, detail = false, className = "" }) {
    const badge = getProjectBadge(project, { detail });

    return (
        <span className={`inline-flex h-7 min-w-[3.9rem] items-center justify-center rounded-full border px-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] ${badge.className} ${className}`.trim()}>
            <span className="relative top-px leading-none">{badge.label}</span>
        </span>
    );
}
