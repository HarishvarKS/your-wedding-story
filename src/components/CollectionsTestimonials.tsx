import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Iraivan captured our baby's first moments with such tenderness and artistry. Every photo tells a story we'll treasure forever.",
        name: "Sarah & James Mitchell",
        service: "Baby Shoots",
    },
    {
        quote: "The studio session exceeded every expectation. The lighting, the direction — everything was absolutely world-class.",
        name: "Elena Vasquez",
        service: "Studio Photography",
    },
    {
        quote: "Our destination shoot in Santorini was pure magic. Iraivan has an eye for finding beauty in every corner of the world.",
        name: "David & Claire Thompson",
        service: "Destination / Outdoor",
    },
];

const CollectionsTestimonials = () => {
    return (
        <section className="py-24 md:py-32 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                        Kind Words
                    </p>
                    <h2
                        className="text-3xl md:text-4xl text-foreground font-light"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        What Our Clients Say
                    </h2>
                    <div className="w-12 h-px bg-border mx-auto mt-6" />
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="flex flex-col items-center text-center"
                        >
                            <Quote className="w-6 h-6 text-border mb-6 rotate-180" />
                            <p
                                className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 italic"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {t.quote}
                            </p>
                            <div className="w-6 h-px bg-border mb-4" />
                            <p className="text-xs tracking-[0.15em] uppercase text-foreground font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                                {t.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>
                                {t.service}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsTestimonials;
