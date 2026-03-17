import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

/* ── Shared logo ── */
const NavLogo = () => (
    <Link to="/" className="flex flex-col leading-none">
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "1.75rem", color: "#E8151B", lineHeight: 1.1, letterSpacing: "0.02em" }}>
            Iraivan
        </span>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.42rem', color: "#E8151B", letterSpacing: '0.603em', textTransform: "uppercase", marginTop: "2px" }}>
            Photography
        </span>
    </Link>
);

/* ── Reusable underline input ── */
const FieldInput = ({
    label, id, type = "text", required = true,
}: {
    label: string; id: string; type?: string; required?: boolean;
}) => (
    <div className="group">
        <label
            htmlFor={id}
            className="block text-xs tracking-[0.22em] uppercase mb-2 transition-colors duration-300 group-focus-within:text-[#E8151B]"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)" }}
        >
            {label}{required && <span style={{ color: "#E8151B" }}>*</span>}
        </label>
        <input
            id={id}
            type={type}
            required={required}
            className="w-full bg-transparent border-0 border-b outline-none py-2 text-sm transition-colors duration-300 focus:border-[#E8151B]"
            style={{
                borderColor: "#d5d5d5",
                color: "#0d0d0d",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
            }}
        />
    </div>
);

/* ── Reusable underline textarea ── */
const FieldTextarea = ({
    label, id, required = true,
}: {
    label: string; id: string; required?: boolean;
}) => (
    <div className="group">
        <label
            htmlFor={id}
            className="block text-xs tracking-[0.22em] uppercase mb-2 transition-colors duration-300 group-focus-within:text-[#E8151B]"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)" }}
        >
            {label}{required && <span style={{ color: "#E8151B" }}>*</span>}
        </label>
        <textarea
            id={id}
            rows={4}
            required={required}
            className="w-full bg-transparent border-0 border-b outline-none py-2 text-sm resize-none transition-colors duration-300 focus:border-[#E8151B]"
            style={{
                borderColor: "#d5d5d5",
                color: "#0d0d0d",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
            }}
        />
    </div>
);

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>

            {/* ═══ NAVBAR ═══ */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md"
                style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
            >
                <div className="max-w-[1400px] mx-auto px-8 py-6 md:px-16 flex items-center justify-between">
                    <NavLogo />
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { label: "Home", to: "/" },
                            { label: "Stories", to: "/stories" },
                            { label: "Collections", to: "/collections" },
                            { label: "About", to: "/about" },
                            { label: "Contact", to: "/contact", active: true },
                        ].map(({ label, to, active }) =>
                            active ? (
                                <Link key={label} to={to}
                                    className="text-sm font-light uppercase tracking-[0.2em] pb-0.5 border-b"
                                    style={{ color: "#0d0d0d", borderColor: "#0d0d0d" }}>
                                    {label}
                                </Link>
                            ) : (
                                <Link key={label} to={to}
                                    className="story-link text-sm font-light uppercase tracking-[0.2em] transition-colors"
                                    style={{ color: "rgba(13,13,13,0.6)" }}>
                                    {label}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </nav>

            {/* ═══ HERO HEADING ═══ */}
            <section className="pt-48 pb-10 px-6 text-center" style={{ backgroundColor: "#ffffff" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p
                        className="text-xs tracking-[0.45em] uppercase mb-5"
                        style={{ fontFamily: "var(--font-sans)", color: "#E8151B" }}
                    >
                        Let's Begin
                    </p>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
                        style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d" }}
                    >
                        We're here <span className="italic">with you.</span>
                    </h1>
                    <div className="w-12 h-[2px] mx-auto mt-8 mb-10" style={{ backgroundColor: "#E8151B" }} />
                    <p
                        className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.55)", fontWeight: 300 }}
                    >
                        Our journey starts here — do you have any questions or would you like to get to know us
                        personally? We are curious about you and your story, so don't hesitate to write to us.
                    </p>
                </motion.div>
            </section>

            {/* ═══ CONTACT INFO STRIP ═══ */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-10 py-8 px-6"
                style={{ borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}
            >
                {[
                    { icon: <Mail size={15} />, label: "hello@iraivanphotography.com" },
                    { icon: <Phone size={15} />, label: "+91 98765 43210" },
                    { icon: <Instagram size={15} />, label: "@iraivanphotography" },
                ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.55)", fontSize: "0.78rem", letterSpacing: "0.06em" }}>
                        <span style={{ color: "#E8151B" }}>{icon}</span>
                        {label}
                    </div>
                ))}
            </motion.div>

            {/* ═══ FORM ═══ */}
            <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    {submitted ? (
                        /* ── Thank-you state ── */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-24"
                        >
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                                style={{ border: "1.5px solid #E8151B" }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="#E8151B" strokeWidth="1.5" className="w-7 h-7">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-light mb-4" style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d" }}>
                                Message Sent
                            </h2>
                            <div className="w-8 h-[1.5px] mx-auto mb-6" style={{ backgroundColor: "#E8151B" }} />
                            <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)", fontWeight: 300 }}>
                                Thank you for reaching out. We'll get back to you within 24 hours.
                            </p>
                            <Link to="/"
                                className="inline-block mt-10 text-xs tracking-[0.3em] uppercase border py-3 px-8 transition-all duration-300 hover:bg-[#0d0d0d] hover:text-white"
                                style={{ borderColor: "#0d0d0d", color: "#0d0d0d", fontFamily: "var(--font-sans)" }}>
                                Back to Home
                            </Link>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                            {/* Row 1 */}
                            <FieldInput label="Name of the Couple" id="couple-name" />

                            {/* Row 2 */}
                            <FieldInput label="Your Contact" id="contact" />

                            {/* Row 3 */}
                            <FieldInput label="Email" id="email" type="email" />

                            {/* Row 4 */}
                            <FieldInput label="When's the Big Day (or Days)?" id="wedding-date" type="date" />

                            {/* Row 5 */}
                            <FieldInput label="City & Venue of the Event(s)" id="venue" />



                            {/* Row 7 – textarea */}
                            <FieldTextarea label="Tell Us About the Celebration" id="celebration" />

                            {/* Row 8 – textarea */}
                            <FieldTextarea label="Tell Us About Your Love Story" id="love-story" />

                            {/* Row 9 */}
                            <FieldInput label="How Did You Find Us?" id="referral" required={false} />

                            {/* Row 10 – textarea */}
                            <FieldTextarea label="Anything Else You'd Like to Share?" id="extra" required={false} />

                            {/* Submit */}
                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    className="inline-block px-14 py-4 text-xs tracking-[0.35em] uppercase border transition-all duration-400 hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] group"
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        borderColor: "#0d0d0d",
                                        color: "#0d0d0d",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    — Send It Over &nbsp;»
                                </button>
                                <p
                                    className="mt-5 text-[10px] tracking-wider"
                                    style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.35)" }}
                                >
                                    We typically respond within 24 hours.
                                </p>
                            </div>
                        </form>
                    )}
                </motion.div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="bg-[#0d0d0d] border-t border-white/10">
                <div className="py-6 text-center">
                    <p className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
                        © {new Date().getFullYear()} IRAIVAN PHOTOGRAPHY — ALL RIGHTS RESERVED
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Contact;
