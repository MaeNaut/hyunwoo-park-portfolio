import { Link } from "react-router-dom";

export default function NavButton({ active, to, state, children }) {
    return (
        <Link
            to={to}
            state={state}
            className={`inline-flex min-h-9 items-center justify-center rounded-full px-3 py-2 text-xs transition sm:min-h-10 sm:px-4 sm:text-sm ${active ? "bg-white text-neutral-900" : "text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
        >
            {children}
        </Link>
    );
}
