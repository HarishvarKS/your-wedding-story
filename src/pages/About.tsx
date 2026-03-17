import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

/* ── Team data – swap placeholder URLs with real photos ── */
const team = [
    {
        name: "Team Member 1",
        role: "Lead Photographer",
        instagram: "#",
        photo: null,
    },
    {
        name: "Team Member 2",
        role: "Photographer",
        instagram: "#",
        photo: null,
    },
    {
        name: "Team Member 3",
        role: "Cinematographer",
        instagram: "#",
        photo: null,
    },
    {
        name: "Team Member 4",
        role: "Editor / Designer",
        instagram: "#",
        photo: null,
    },
    {
        name: "Team Member 5",
        role: "Videographer",
        instagram: "#",
        photo: null,
    },
    {
        name: "Team Member 6",
        role: "Assistant Photographer",
        instagram: "#",
        photo: null,
    },
];

/* ── Shared nav logo & links ── */
const NavLogo = () => (
    <Link to="/" className="flex flex-col leading-none">
        <span
            style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "1.75rem",
                color: "#E8151B",
                lineHeight: 1.1,
                letterSpacing: "0.02em",
            }}
        >
            Iraivan
        </span>
        <span
            style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: '0.42rem',
                color: "#E8151B",
                letterSpacing: '0.603em',
                textTransform: "uppercase",
                marginTop: "2px",
            }}
        >
            Photography
        </span>
    </Link>
);

const About = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>

            {/* ═══ NAVBAR ═══ */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
                style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                <div className="max-w-[1400px] mx-auto px-8 py-6 md:px-16 flex items-center justify-between">
                    <NavLogo />
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { label: "Home", to: "/" },
                            { label: "Stories", to: "/stories" },
                            { label: "Collections", to: "/collections" },
                            { label: "About", to: "/about", active: true },
                            { label: "Contact", to: "/contact" },
                        ].map(({ label, to, active }) =>
                            active ? (
                                <Link
                                    key={label}
                                    to={to}
                                    className="text-sm font-light uppercase tracking-[0.2em] pb-0.5 border-b"
                                    style={{ color: "#0d0d0d", borderColor: "#0d0d0d" }}
                                >
                                    {label}
                                </Link>
                            ) : (
                                <Link
                                    key={label}
                                    to={to}
                                    className="story-link text-sm font-light uppercase tracking-[0.2em] transition-colors"
                                    style={{ color: "rgba(13,13,13,0.65)" }}
                                >
                                    {label}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </nav>

            {/* ═══ HERO / INTRO ═══ */}
            <section className="pt-44 pb-16 px-6 text-center" style={{ backgroundColor: "#ffffff" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Eyebrow */}
                    <p
                        className="text-xs tracking-[0.45em] uppercase mb-5"
                        style={{ fontFamily: "var(--font-sans)", color: "#E8151B" }}
                    >
                        Iraivan Photography
                    </p>

                    {/* Title */}
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-0"
                        style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d" }}
                    >
                        About <span className="italic">Us</span>
                    </h1>

                    {/* Red divider */}
                    <div className="w-12 h-[2px] mx-auto mt-8 mb-10" style={{ backgroundColor: "#E8151B" }} />

                    {/* Story paragraphs */}
                    <p
                        className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.65)", fontWeight: 300 }}
                    >
                        We shot our first wedding as a one-member team. Within a few years we were traveling around
                        the Country — shooting weddings, taking workshops, and becoming sought after.
                        It all took flight from one place: <span className="font-medium" style={{ color: "#0d0d0d" }}>You.</span>
                    </p>
                    <p
                        className="mt-5 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.65)", fontWeight: 300 }}
                    >
                        Our vision has always been to capture the life and love of the people we shoot, and surprise
                        them with a delightful experience. The search is always for that intimate moment that flies
                        past in the blink of an eye — and we've mastered the art of capturing it all.
                    </p>
                    <p
                        className="mt-5 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.65)", fontWeight: 300 }}
                    >
                        We are a team of talented individuals — photographers, videographers, editors, and studio
                        managers — sharing the common vision of making the world a better and more interesting place,
                        one moment at a time.
                    </p>
                </motion.div>
            </section>

            {/* ═══ TEAM ═══ */}
            <section className="pb-28 px-6" style={{ backgroundColor: "#ffffff" }}>
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p
                        className="text-xs tracking-[0.55em] uppercase mb-3"
                        style={{ fontFamily: "var(--font-sans)", color: "#E8151B" }}
                    >
                        The People Behind the Lens
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-light"
                        style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d" }}
                    >
                        Our Team
                    </h2>
                    <div className="w-10 h-[2px] mx-auto mt-5" style={{ backgroundColor: "#E8151B" }} />
                </motion.div>

                {/* 2 × 3 team grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group flex flex-col items-center"
                        >
                            {/* Photo placeholder wrapper */}
                            <div className="relative w-full max-w-[340px] mb-6">
                                {/* Decorative offset border behind */}
                                <div
                                    className="absolute transition-transform duration-500"
                                    style={{
                                        top: 10,
                                        left: 10,
                                        right: -10,
                                        bottom: -10,
                                        border: "1.5px solid #E8151B",
                                        zIndex: 0,
                                    }}
                                />
                                {/* Main card */}
                                <div
                                    className="relative z-10 w-full overflow-hidden"
                                    style={{ aspectRatio: "3/4", border: "1px solid #e0e0e0", backgroundColor: "#f4f4f4" }}
                                >
                                    {member.photo ? (
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-4"
                                            style={{ backgroundColor: "#f4f4f4" }}>
                                            {/* Silhouette */}
                                            <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="w-20 h-24" style={{ opacity: 0.18 }}>
                                                <circle cx="40" cy="28" r="20" fill="#0d0d0d" />
                                                <path d="M0 100C0 77.909 17.909 60 40 60s40 17.909 40 40H0z" fill="#0d0d0d" />
                                            </svg>
                                            <p className="text-xs tracking-[0.3em] uppercase"
                                                style={{ color: "#bbb", fontFamily: "var(--font-sans)" }}>Photo Placeholder</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Name */}
                            <h3
                                className="text-xl tracking-[0.12em] uppercase mb-1 text-center"
                                style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d", fontWeight: 400 }}
                            >
                                {member.name}
                            </h3>

                            {/* Thin red line */}
                            <div className="w-6 h-[1.5px] my-2" style={{ backgroundColor: "#E8151B" }} />

                            {/* Role */}
                            <p
                                className="text-xs tracking-[0.25em] uppercase mb-3"
                                style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)" }}
                            >
                                {member.role}
                            </p>

                            {/* Instagram icon */}
                            <a
                                href={member.instagram}
                                aria-label={`${member.name} on Instagram`}
                                className="transition-colors duration-300 hover:opacity-100 opacity-40"
                                style={{ color: "#0d0d0d" }}
                            >
                                <Instagram size={17} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ STATS STRIP ═══ */}
            <section className="py-16 border-t border-b" style={{ borderColor: "#ebebeb", backgroundColor: "#fafafa" }}>
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
                    {[
                        { value: "300+", label: "Weddings Shot" },
                        { value: "5+", label: "Years of Story" },
                        { value: "∞", label: "Moments Frozen" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <p
                                className="text-4xl md:text-5xl font-light mb-2"
                                style={{ fontFamily: "var(--font-serif)", color: "#E8151B" }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="text-xs tracking-[0.3em] uppercase"
                                style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)" }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
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

export default About;
