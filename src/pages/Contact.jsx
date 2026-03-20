import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";

export default function Contact({ profile }) {
    const contactItems = [
        {
            label: "Email",
            icon: faEnvelope,
            content: (
                <a href={`mailto:${profile.email}`} className="mt-2 block text-white hover:underline">
                    {profile.email}
                </a>
            ),
        },
        {
            label: "LinkedIn",
            icon: faLinkedin,
            content: (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-2 block text-white hover:underline">
                    View profile
                </a>
            ),
        },
    ];

    return (
        <div className="space-y-8">
            <SectionTitle
                eyebrow="Contact"
                title="Get in touch"
                body="If you'd like to connect, reach out by email or LinkedIn."
            />

            <div className="grid gap-6 md:grid-cols-2">
                {contactItems.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <FontAwesomeIcon icon={item.icon} className="fa-lg" />
                        <p className="mt-4 text-sm text-neutral-400">{item.label}</p>
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
