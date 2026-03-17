import { Link } from "react-router-dom";
import GalleryCard from "@/components/GalleryCard";
import { galleryItems } from "@/data/gallery";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const Stories = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Navbar matching LUMIÈRE STUDIOS style */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-8 py-6 md:px-16 flex items-center justify-between">
                    <Link to="/" className="flex flex-col leading-none">
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 300,
                                fontSize: '1.75rem',
                                color: '#E8151B',
                                lineHeight: 1.1,
                                letterSpacing: '0.02em',
                            }}
                        >
                            Iraivan
                        </span>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 400,
                                fontSize: '0.42rem',
                                color: '#E8151B',
                                letterSpacing: '0.603em',
                                textTransform: 'uppercase',
                                marginTop: '2px',
                            }}
                        >
                            Photography
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/stories"
                            className="text-sm font-light uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-0.5"
                        >
                            Stories
                        </Link>
                        <Link
                            to="/collections"
                            className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors"
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

            <main className="pt-24 px-2 md:px-4 pb-16 max-w-[1600px] mx-auto">
                {/* Back link */}
                {/*<Link
                    to="/"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors mt-4 mb-2 text-xs tracking-wider uppercase"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>*/}

                {/* Hero header — consistent with all pages */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center py-10 md:py-14">
                    <p className="text-xs tracking-[0.45em] uppercase mb-5"
                        style={{ fontFamily: "var(--font-sans)", color: "#E8151B" }}>
                        Iraivan Photography
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-0"
                        style={{ fontFamily: "var(--font-serif)", color: "#0d0d0d" }}>
                        Our <span className="italic">Portfolio</span>
                    </h1>
                    <div className="w-12 h-[2px] mx-auto mt-8 mb-6" style={{ backgroundColor: "#E8151B" }} />
                    <p className="text-sm md:text-base max-w-xl mx-auto"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(13,13,13,0.5)", fontWeight: 300 }}>
                        Stories we've had the honor of telling
                    </p>
                </motion.div>

                {/* Uniform fixed-height grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="group flex flex-col items-center"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
                        {galleryItems.map((item) => (
                            <GalleryCard key={item.id} item={item} />
                        ))}
                    </div>
                </motion.div>
            </main>
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

export default Stories;
