import { getProjectImages } from "../utils/projectMeta";

export default function ProjectCover({
    project,
    imageClassName = "h-full w-full object-cover",
    gridClassName = "grid h-full w-full gap-1 bg-white/5",
    imageWrapperClassName = "overflow-hidden",
    imageAltLabel = "preview",
    hoverScale = false,
}) {
    const images = getProjectImages(project);
    const hoverClassName = hoverScale ? " transition duration-500 group-hover:scale-105" : "";

    if (images.length === 1) {
        return (
            <img
                src={images[0]}
                alt={project.title}
                className={`${imageClassName}${hoverClassName}`}
            />
        );
    }

    return (
        <div
            // Some projects use multiple stills instead of one cover image.
            className={gridClassName}
            style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
        >
            {images.map((image, index) => (
                <div key={`${project.slug}-${index}`} className={imageWrapperClassName}>
                    <img
                        src={image}
                        alt={`${project.title} ${imageAltLabel} ${index + 1}`}
                        className={`${imageClassName}${hoverClassName}`}
                    />
                </div>
            ))}
        </div>
    );
}
