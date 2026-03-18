import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSteam, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faGamepad, faGlobe } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
    github: faGithub,
    steam: faSteam,
    wordpress: faWordpress,
    globe: faGlobe,
    gamepad: faGamepad,
    external: faArrowUpRightFromSquare,
};

function getLinkDisplay(link) {
    const isPrimary = link.icon === "github";

    return {
        icon: iconMap[link.icon] ?? faArrowUpRightFromSquare,
        className: isPrimary
            ? "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900"
            : "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white",
    };
}

export default function ProjectLinkButton({ link }) {
    if (!link?.url) {
        return null;
    }

    const { icon, className } = getLinkDisplay(link);

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={className}
        >
            <FontAwesomeIcon icon={icon} className="fa-lg" /> {link.label}
        </a>
    );
}
