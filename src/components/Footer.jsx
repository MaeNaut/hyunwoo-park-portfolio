export default function Footer({ profile }) {
    return (
        <footer className="mt-24 border-t border-white/10 py-8 text-sm text-neutral-400">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="sm:flex-1">&copy; 2026 {profile.name}</p>
                <div className="flex flex-wrap justify-center gap-4 sm:flex-1 sm:justify-end">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                        LinkedIn
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
                        GitHub
                    </a>
                    <a href={`mailto:${profile.email}`} className="hover:text-white">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
