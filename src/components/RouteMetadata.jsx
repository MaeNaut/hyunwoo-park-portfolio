import { useEffect } from "react";

const SITE_URL = "https://hyunwoo-park-portfolio.vercel.app";

const routeMetadata = {
    "/": {
        title: "Hyunwoo Park | Game, Web & Software Developer",
        description:
            "Portfolio of Hyunwoo Park, a game, web, and software developer focused on interactive systems, UI, and frontend development.",
    },
    "/projects": {
        title: "Projects | Hyunwoo Park",
        description:
            "Selected game development, graphics programming, modding, and frontend projects by Hyunwoo Park.",
    },
    "/resume": {
        title: "Resume | Hyunwoo Park",
        description: "Resume, experience, and professional links for Hyunwoo Park.",
    },
    "/contact": {
        title: "Contact | Hyunwoo Park",
        description: "Contact Hyunwoo Park by email or LinkedIn.",
    },
};

function setMetaContent(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

    if (!content) {
        element?.remove();
        return;
    }

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
}

function getProjectImage(project) {
    const image = Array.isArray(project?.image) ? project.image[0] : project?.image;
    return image ? new URL(image, window.location.origin).href : null;
}

export default function RouteMetadata({ pathname, profile, projects }) {
    useEffect(() => {
        const normalizedPath = pathname.replace(/\/+$/, "") || "/";
        const projectSlug = normalizedPath.match(/^\/projects\/([^/]+)$/)?.[1];
        const project = projectSlug
            ? projects.find((item) => item.slug === decodeURIComponent(projectSlug))
            : null;
        const fallback = routeMetadata["/"];
        const metadata = project
            ? {
                title: `${project.title}${project.detailVariant === "case-study" ? " Case Study" : ""} | ${profile.name}`,
                description: project.summary,
                image: getProjectImage(project),
                type: "article",
            }
            : {
                ...(routeMetadata[normalizedPath] ?? fallback),
                type: "website",
            };
        const canonicalUrl = new URL(normalizedPath, SITE_URL).href;
        let canonical = document.head.querySelector('link[rel="canonical"]');

        document.title = metadata.title;
        setMetaContent("name", "description", metadata.description);
        setMetaContent("property", "og:site_name", profile.name);
        setMetaContent("property", "og:title", metadata.title);
        setMetaContent("property", "og:description", metadata.description);
        setMetaContent("property", "og:type", metadata.type);
        setMetaContent("property", "og:url", canonicalUrl);
        setMetaContent("property", "og:image", metadata.image);
        setMetaContent("name", "twitter:card", metadata.image ? "summary_large_image" : "summary");
        setMetaContent("name", "twitter:title", metadata.title);
        setMetaContent("name", "twitter:description", metadata.description);
        setMetaContent("name", "twitter:image", metadata.image);

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }

        canonical.setAttribute("href", canonicalUrl);
    }, [pathname, profile.name, projects]);

    return null;
}
