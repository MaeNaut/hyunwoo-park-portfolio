import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function IconLinkRow({
    href,
    icon,
    label,
    external = false,
}) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 hover:bg-white/5"
        >
            <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={icon} className="fa-lg" />
                {label}
            </span>
            {external ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-lg" /> : null}
        </a>
    );
}
