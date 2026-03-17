import { Link } from "react-router-dom";
import type { GalleryItem } from "@/data/gallery";

const GalleryCard = ({ item }: { item: GalleryItem }) => {
    return (
        <Link
            to={`/album/${item.id}`}
            className="group relative overflow-hidden block w-full"
            style={{ height: "420px" }}
        >
            <img
                src={item.image}
                alt={`${item.couple} — ${item.title}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            {/* Text overlay — bottom-aligned */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 px-4 text-center">
                <p
                    className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-1 font-light"
                    style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}
                >
                    {item.couple}
                </p>
                <h3
                    className="text-lg text-white font-light italic leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    {item.title}
                </h3>
            </div>
        </Link>
    );
};

export default GalleryCard;
