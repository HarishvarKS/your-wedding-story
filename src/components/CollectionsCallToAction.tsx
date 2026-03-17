import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CollectionsCallToAction = () => {
    return (
        <section className="py-24 md:py-32 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto px-6 text-center"
            >
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                    Let's Create Together
                </p>
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-foreground font-light mb-6"
                    style={{ fontFamily: "var(--font-serif)" }}
                >
                    Ready to Book Your Session?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
                    Every story deserves to be told beautifully. Let's craft something unforgettable together.
                </p>
                <Link
                    to="/contact"
                    className="inline-block px-12 py-4 text-xs tracking-[0.25em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-all duration-300"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    Book Now
                </Link>
            </motion.div>
        </section>
    );
};

export default CollectionsCallToAction;
