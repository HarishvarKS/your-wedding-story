import { useParams, Link } from "react-router-dom";
import { galleryItems, albumPhotos } from "@/data/gallery";
import { useRef, useState, useEffect } from "react";

/* ── Elegant floating music player ── */
const MusicPlayer = ({
    songUrl,
    songTitle,
    songPoster,
    couple,
}: {
    songUrl: string;
    songTitle: string;
    songPoster?: string;
    couple: string;
}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const audio = new Audio(songUrl);
        audio.loop = true;
        audioRef.current = audio;

        /* Try autoplay — browsers usually allow after first user interaction */
        const tryAutoplay = () => {
            audio.play().then(() => setIsPlaying(true)).catch(() => {
                /* Autoplay blocked — user must click play */
            });
            document.removeEventListener("click", tryAutoplay);
        };
        /* Attempt immediately; fall back to waiting for first click */
        audio.play().then(() => setIsPlaying(true)).catch(() => {
            document.addEventListener("click", tryAutoplay, { once: true });
        });

        const onTimeUpdate = () => {
            if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
        };
        audio.addEventListener("timeupdate", onTimeUpdate);

        return () => {
            audio.pause();
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audioRef.current = null;
        };
    }, [songUrl]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-7 right-3 z-50 flex items-center gap-2.5 rounded-xl px-3 py-2 shadow-2xl transition-all duration-500"
            style={{
                background: "rgba(13,13,13,0.82)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.1)",
                minWidth: "110px",
                maxWidth: "160px",
            }}
        >
            {/* Song poster */}
            {songPoster && (
                <div className="relative flex-shrink-0 w-9 h-9 rounded-md overflow-hidden shadow-lg">
                    <img src={songPoster} alt={songTitle} className="w-full h-full object-cover" />
                    {/* Spinning vinyl overlay when playing */}
                    <div
                        className="absolute inset-0 rounded-md"
                        style={{
                            background: isPlaying
                                ? "conic-gradient(from 0deg, transparent 70%, rgba(0,0,0,0.35) 100%)"
                                : "none",
                            animation: isPlaying ? "spin 4s linear infinite" : "none",
                        }}
                    />
                </div>
            )}

            {/* Text info */}
            <div className="flex-1 min-w-0">
                <p
                    className="text-[10px] tracking-[0.22em] uppercase truncate"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)" }}
                >
                    {couple}
                </p>
                <p
                    className="text-sm font-light truncate"
                    style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                    {songTitle}
                </p>
                {/* Progress bar */}
                <div className="mt-2 h-[2px] rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%`, backgroundColor: "#E8151B" }}
                    />
                </div>
            </div>

            {/* Play / Pause button */}
            <button
                onClick={togglePlay}
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                style={{ background: "#E8151B", border: "none" }}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {isPlaying ? (
                    /* Pause icon */
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <rect x="5" y="4" width="4" height="16" rx="1" />
                        <rect x="15" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    /* Play icon */
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <polygon points="6,4 20,12 6,20" />
                    </svg>
                )}
            </button>

            {/* Close / dismiss */}
            <button
                onClick={() => {
                    audioRef.current?.pause();
                    setVisible(false);
                }}
                className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                style={{ background: "rgba(13,13,13,0.9)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "10px" }}
                aria-label="Close player"
            >
                ✕
            </button>
        </div>
    );
};

const AlbumDetail = () => {
    const { id } = useParams<{ id: string }>();
    const item = galleryItems.find((g) => g.id === id);
    const photos = albumPhotos(id || "1");

    if (!item) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground">Album not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
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
                        <Link to="/" className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors">Home</Link>
                        <Link to="/stories" className="text-sm font-light uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-0.5">Stories</Link>
                        <Link to="/collections" className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors">Collections</Link>
                        <Link to="/about" className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors">About</Link>
                        <Link to="/contact" className="story-link text-sm font-light uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-colors">Contact</Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 md:pt-40 px-4 md:px-6 pb-16 max-w-[1200px] mx-auto">
                <div className="text-center mb-12">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-2 font-light">
                        {item.couple}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-light italic text-foreground font-serif-display">
                        {item.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {photos.map((photo, i) => (
                        <div
                            key={i}
                            className={`overflow-hidden rounded-sm ${i === 0 ? "md:col-span-2" : ""}`}
                        >
                            <img
                                src={photo}
                                alt={`${item.couple} photo ${i + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </main>

            {/* Floating music player — only shown if album has a song */}
            {item.songUrl && (
                <MusicPlayer
                    songUrl={item.songUrl}
                    songTitle={item.songTitle || "Song"}
                    songPoster={item.songPoster}
                    couple={item.couple}
                />
            )}

            {/* Spin animation for vinyl effect */}
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
    );
};

export default AlbumDetail;

