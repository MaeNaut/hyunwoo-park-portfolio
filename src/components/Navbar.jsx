import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar({ profile, pathname, locationState }) {
    const isProjectDetailPage = pathname.startsWith("/projects/");
    const detailBackPath = locationState?.fromPath === "/" ? "/" : "/projects";
    const detailBackLabel = detailBackPath === "/" ? "Back to Home" : "Back to Projects";
    const titleClassName = "mx-auto pt-1 pb-0 text-lg leading-none sm:ml-3 sm:mr-0 sm:py-0 sm:text-lg";
    const navRestoreState = isProjectDetailPage
        ? { restoreScroll: true, restoreScrollPath: detailBackPath }
        : undefined;
    const isHomeActive = pathname === "/" || (isProjectDetailPage && detailBackPath === "/");
    const isProjectsActive = pathname === "/projects" || (isProjectDetailPage && detailBackPath === "/projects");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateScrolledState = () => {
            setIsScrolled(window.scrollY > 8);
        };

        updateScrolledState();
        window.addEventListener("scroll", updateScrolledState, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateScrolledState);
        };
    }, []);

    const surfaceClassName = isScrolled
        ? "opacity-100 border-white/10 bg-neutral-950/70 shadow-2xl shadow-black/20"
        : "opacity-0 border-transparent bg-neutral-950/0 shadow-2xl shadow-black/20";

    return (
        <header className="relative rounded-3xl px-3 py-2.5 sm:rounded-full sm:px-4 sm:py-3">
            <div className={`pointer-events-none absolute inset-0 rounded-3xl border shadow-2xl shadow-black/20 backdrop-blur transition-[opacity,box-shadow,background-color,border-color] duration-300 sm:rounded-full ${surfaceClassName}`} />
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Link
                    to={isProjectDetailPage ? detailBackPath : "/"}
                    state={navRestoreState}
                    className={`${titleClassName} inline-flex cursor-pointer items-center gap-2 text-left text-base font-semibold tracking-tight text-white/90 transition duration-200 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.50)]`}
                >
                    {isProjectDetailPage ? (
                        <>
                            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                            {detailBackLabel}
                        </>
                    ) : (
                        profile.name
                    )}
                </Link>
                <nav className="grid grid-cols-4 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                    <NavButton to="/" active={isHomeActive} state={isProjectDetailPage && detailBackPath === "/" ? navRestoreState : undefined}>
                        Home
                    </NavButton>
                    <NavButton to="/projects" active={isProjectsActive} state={isProjectDetailPage && detailBackPath === "/projects" ? navRestoreState : undefined}>
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
