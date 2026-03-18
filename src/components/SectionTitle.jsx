export default function SectionTitle({ eyebrow, title, body }) {
    return (
        <div className="space-y-3">
            {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">{eyebrow}</p> : null}
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            {body ? <p className="max-w-2xl text-neutral-300">{body}</p> : null}
        </div>
    );
}