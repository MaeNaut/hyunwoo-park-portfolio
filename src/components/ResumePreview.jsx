// This is a visual resume mockup, so the layout is driven by placeholder line sizes.
const previewSections = [
    {
        title: "Objective",
        lines: ["w-full", "w-3/4"],
    },
    {
        title: "Education",
        headerLines: ["w-28", "w-20"],
        sideLine: "w-16",
    },
    {
        title: "Skills",
        lines: ["w-1/2", "w-2/3"],
    },
    {
        title: "Project",
        headerLines: ["w-32"],
        sideLine: "w-16",
        lines: ["w-full", "w-3/4"],
    },
    {
        title: "Work Experience",
        headerLines: ["w-24"],
        sideLine: "w-16",
        lines: ["w-full", "w-3/4"],
    },
];

function PreviewLine({ widthClassName, dark = false }) {
    return (
        <div className={`h-1.5 rounded-full ${widthClassName} ${dark ? "bg-neutral-700" : "bg-neutral-200"}`} />
    );
}

function PreviewSection({ title, lines = [], headerLines, sideLine }) {
    return (
        <div>
            <div className="border-b-[1.5px] border-neutral-900 pb-0.5">
                <p className="font-bold uppercase tracking-[0.08em]">{title}</p>
            </div>

            <div className="mt-1.5">
                {headerLines ? (
                    <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1.5">
                            {headerLines.map((widthClassName) => (
                                <PreviewLine
                                    key={`${title}-${widthClassName}`}
                                    widthClassName={widthClassName}
                                    dark
                                />
                            ))}
                        </div>
                        {sideLine ? <PreviewLine widthClassName={sideLine} /> : null}
                    </div>
                ) : null}

                {lines.length ? (
                    <div className={`${headerLines ? "mt-1.5" : ""} space-y-1.5`}>
                        {lines.map((widthClassName) => (
                            <PreviewLine key={`${title}-${widthClassName}`} widthClassName={widthClassName} />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default function ResumePreview({ name }) {
    return (
        <div className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5">
            <div className="mx-auto max-w-[18.5rem] rounded-[1.25rem] bg-white px-5 py-6 text-neutral-900 shadow-2xl shadow-black/25">
                <div>
                    <p className="text-[1.3rem] font-bold leading-none text-neutral-950">{name}</p>
                    <div className="mt-2.5 space-y-1.5">
                        <div className="h-1.5 w-30 rounded-full bg-neutral-300" />
                        <div className="h-1.5 w-24 rounded-full bg-neutral-300" />
                    </div>
                </div>

                <div className="mt-4 space-y-2.5 text-[0.56rem] leading-[1.35] text-neutral-800">
                    {previewSections.map((section) => (
                        <PreviewSection key={section.title} {...section} />
                    ))}
                </div>
            </div>
        </div>
    );
}
