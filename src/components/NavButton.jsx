export default function NavButton({ active, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm transition ${active ? "bg-white text-neutral-900" : "text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
        >
            {children}
        </button>
    );
}