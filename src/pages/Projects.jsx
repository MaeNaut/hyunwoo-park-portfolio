import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
    return (
        <div className="space-y-8">
            <SectionTitle
                eyebrow="All Projects"
                title="Selected work"
                body="A broader view of my projects across gameplay, modding, and frontend work."
            />

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
}
