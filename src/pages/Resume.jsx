import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";
import IconLinkRow from "../components/IconLinkRow";
import ResumePreview from "../components/ResumePreview";
import generalResumePdf from "../assets/resumes/Hyunwoo_Park_Resume.pdf";

export default function Resume({ profile }) {
    const resumeLastUpdated = "March 16, 2026";
    const resumeActions = [
        {
            label: "Open Resume",
            href: generalResumePdf,
            icon: faArrowUpRightFromSquare,
            className: "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900",
            target: "_blank",
            rel: "noreferrer",
        },
        {
            label: "Download PDF",
            href: generalResumePdf,
            icon: faDownload,
            className: "inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white",
            download: true,
        },
    ];
    const externalLinks = [
        { href: profile.github, icon: faGithub, label: "GitHub", external: true },
        { href: profile.linkedin, icon: faLinkedin, label: "LinkedIn", external: true },
        { href: `mailto:${profile.email}`, icon: faEnvelope, label: "Email" },
    ];

    return (
        <div className="space-y-8">
            <SectionTitle
                eyebrow="Resume"
                title="Resume and supporting links"
                body="A quick access point for my resume, professional profiles, and contact details."
            />

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <h3 className="text-2xl font-semibold text-white">Resume</h3>

                    <ResumePreview name={profile.name} />

                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-wrap gap-3">
                            {resumeActions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    target={action.target}
                                    rel={action.rel}
                                    download={action.download}
                                    className={action.className}
                                >
                                    <FontAwesomeIcon icon={action.icon} className="fa-lg" />
                                    {action.label}
                                </a>
                            ))}
                        </div>

                        <p className="text-sm text-neutral-500">
                            Last updated: {resumeLastUpdated}
                        </p>
                    </div>
                </div>

                <div className="self-start rounded-3xl border border-white/10 bg-white/5 p-8">
                    <h3 className="text-2xl font-semibold text-white">External Links</h3>
                    <div className="mt-6 space-y-4 text-neutral-300">
                        {externalLinks.map((link) => (
                            <IconLinkRow key={link.label} {...link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
