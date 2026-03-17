import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import CollectionsTestimonials from "@/components/CollectionsTestimonials";
import CollectionsCallToAction from "@/components/CollectionsCallToAction";

const services = [
    {
        title: "Studio Photography",
        description: "Professional portraits, headshots, and creative studio sessions tailored to your vision.",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&q=80",
    },
    {
        title: "Baby Shoots",
        description: "Capturing the magic of newborns, milestones, and growing families with gentle artistry.",
        imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=800&fit=crop&q=80",
    },
    {
        title: "Commercial Photography",
        description: "Product photography, branding, and lifestyle imagery crafted for modern businesses.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop&q=80",
    },
    {
        title: "Destination / Outdoor",
        description: "Epic outdoor weddings, engagements, and travel photography across the globe.",
        imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop&q=80",
    },
];

const Collections = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ── Navbar matching Home & Portfolio style ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-8 py-6 md:px-16 flex items-center justify-between">
                    {/* Logo */}
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

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/stories"
                            className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors"
                        >
                            Stories
                        </Link>
                        <Link
                            to="/collections"
                            className="text-sm font-light uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-0.5"
                        >
                            Collections
                        </Link>
                        <Link
                            to="/about"
                            className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── Hero / Section Title ── */}
            <section className="pt-44 pb-8 md:pt-52 md:pb-12 px-6" style={{ backgroundColor: "#ffffff" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p
                        className="text-xs tracking-[0.45em] uppercase mb-5"
                        style={{ fontFamily: "var(--font-sans)", color: "#E8151B" }}
                    >
                        Iraivan Photography
                    </p>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
                        style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d" }}
                    >
                        Our <span className="italic">Collections</span>
                    </h1>
                    <div className="w-12 h-[2px] mx-auto mt-8 mb-8" style={{ backgroundColor: "#E8151B" }} />
                    <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)", fontWeight: 300 }}>
                        From intimate studio portraits to breathtaking outdoor adventures — discover every way we tell your story.
                    </p>
                </motion.div>
            </section>

            {/* ── Service Cards Grid ── */}
            <section id="services" className="py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
                    {services.map((service, i) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            index={i}
                        />
                    ))}
                </div>
            </section>

            {/* ── Testimonials ── */}
            <CollectionsTestimonials />

            {/* ── CTA ── */}
            <CollectionsCallToAction />

            {/* ── Footer ── */}
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

export default Collections;
