import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const ServiceCard = ({ title, description, imageUrl, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group flex flex-col items-center"
        >
            {/* Image with layered frame effect */}
            <div className="relative w-full aspect-[3/4] mb-8">
                {/* Outer decorative border */}
                <div className="absolute inset-0 border border-border/60 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />

                {/* Main image */}
                <div className="relative w-full h-full overflow-hidden bg-muted">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
            </div>

            {/* Title */}
            <h3
                className="text-lg md:text-xl tracking-[0.15em] uppercase text-foreground mb-3 text-center"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
                {title}
            </h3>

            {/* Decorative line */}
            <div className="w-8 h-px bg-border mb-4" />

            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed tracking-wide max-w-[260px]">
                {description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;
