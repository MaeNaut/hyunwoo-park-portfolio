import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar({ profile, pathname }) {
    const isProjectDetailPage = pathname.startsWith("/projects/");

    return (
        <header className="sticky top-4 z-30 mb-10 rounded-full border border-white/10 bg-neutral-950/70 px-4 py-3 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Link
                    to={isProjectDetailPage ? "/projects" : "/"}
                    className="ml-3 inline-flex cursor-pointer items-center gap-2 text-left text-lg font-semibold tracking-tight text-white/90 transition duration-200 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.50)]"
                >
                    {isProjectDetailPage ? (
                        <>
                            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                            Back to Projects
                        </>
                    ) : (
                        profile.name
                    )}
                </Link>
                <nav className="flex flex-wrap gap-2">
                    <NavButton to="/" active={pathname === "/"}>
                        Home
                    </NavButton>
                    <NavButton to="/projects" active={pathname === "/projects" || isProjectDetailPage}>
                        Projects
                    </NavButton>
                    <NavButton to="/resume" active={pathname === "/resume"}>
                        Resume
                    </NavButton>
                    <NavButton to="/contact" active={pathname === "/contact"}>
                        Contact
                    </NavButton>
                </nav>
            </div>
        </header>
    );
}
