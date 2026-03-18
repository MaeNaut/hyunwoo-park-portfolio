export default function Footer({ profile }) {
    return (
        <footer className="mt-24 border-t border-white/10 py-8 text-sm text-neutral-400">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 {profile.name}</p>
                <div className="flex flex-wrap gap-4">
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