import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";

export default function Contact({ profile }) {
    return (
        <div className="space-y-8">
            <SectionTitle
                eyebrow="Contact"
                title="Get in touch"
                body="If you'd like to connect, reach out by email, phone, or LinkedIn."
            />

            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                    <p className="mt-4 text-sm text-neutral-400">Email</p>
                    <a href={`mailto:${profile.email}`} className="mt-2 block text-white hover:underline">
                        {profile.email}
                    </a>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <FontAwesomeIcon icon={faPhone} className="fa-lg" />
                    <p className="mt-4 text-sm text-neutral-400">Phone</p>
                    <p className="mt-2 text-white">{profile.phone}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
                    <p className="mt-4 text-sm text-neutral-400">LinkedIn</p>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-2 block text-white hover:underline">
                        View profile
                    </a>
                </div>
            </div>
        </div>
    );
}
