export default function ProjectBulletList({ title, items }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <ul className="mt-4 space-y-3 text-neutral-300">
                {items.map((item) => (
                    <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
