export interface GalleryItem {
  id: string;
  couple: string;
  title: string;
  image: string;
  height: "tall" | "medium" | "short";
  songUrl?: string;
  songTitle?: string;
  songPoster?: string;
}

const UNSPLASH = (id: string, w = 800, h = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const galleryItems: GalleryItem[] = [
  { id: "1", couple: "Arjun & Meera", title: "Fabric of Love", image: UNSPLASH("photo-1519741497674-611481863552", 800, 1200), height: "tall",
    songUrl: "/audio/Neelothi.mp3",
    songTitle: "Neelothi",
    songPoster: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&q=80",
  },
  { id: "2", couple: "Rahul & Priya", title: "A Golden Memory", image: UNSPLASH("photo-1606216794074-735e91aa2c92", 800, 900), height: "medium" },
  { id: "3", couple: "Vikram & Anjali", title: "Timeless Vows", image: UNSPLASH("photo-1583939003579-730e3918a45a", 800, 1100), height: "tall" },
  { id: "4", couple: "Karan & Sneha", title: "Ethereal Bloom", image: UNSPLASH("photo-1591604466107-ec97de577aff", 800, 800), height: "short" },
  { id: "5", couple: "Aditya & Nisha", title: "Sacred Threads", image: UNSPLASH("photo-1594909122845-11baa439b7bf", 800, 1200), height: "tall" },
  { id: "6", couple: "Rohan & Divya", title: "Whispers of Forever", image: UNSPLASH("photo-1460978812857-470ed1c77af0", 800, 900), height: "medium" },
  { id: "7", couple: "Siddharth & Kavya", title: "The First Dance", image: UNSPLASH("photo-1511285560929-80b456fea0bc", 800, 1100), height: "tall" },
  { id: "8", couple: "Nikhil & Aarti", title: "Velvet Twilight", image: UNSPLASH("photo-1465495976277-4387d4b0b4c6", 800, 800), height: "short" },
  { id: "9", couple: "Manish & Ritu", title: "Dreaming in Gold", image: UNSPLASH("photo-1519225421980-715cb0215aed", 800, 1200), height: "tall" },
  { id: "10", couple: "Amit & Pooja", title: "Monsoon Romance", image: UNSPLASH("photo-1522673607200-164d1b6ce486", 800, 900), height: "medium" },
  { id: "11", couple: "Varun & Swati", title: "Under the Stars", image: UNSPLASH("photo-1537633552985-df8429e8048b", 800, 1100), height: "tall" },
  { id: "12", couple: "Pranav & Megha", title: "Lotus & Light", image: UNSPLASH("photo-1549417229-7686ac5595fd", 800, 800), height: "short" },
  { id: "13", couple: "Deepak & Isha", title: "Crimson Promise", image: UNSPLASH("photo-1544078751-58fee2d8a03b", 800, 1200), height: "tall" },
  { id: "14", couple: "Gaurav & Tanvi", title: "Sunlit Embrace", image: UNSPLASH("photo-1507504031003-b417219a0fde", 800, 900), height: "medium" },
  { id: "15", couple: "Harsh & Simran", title: "Echoes of Joy", image: UNSPLASH("photo-1520854221256-17451cc331bf", 800, 1100), height: "tall" },
  { id: "16", couple: "Raj & Neha", title: "Garden of Bliss", image: UNSPLASH("photo-1478146059778-26028b07395a", 800, 800), height: "short" },
  { id: "17", couple: "Ankit & Shweta", title: "Silk & Sandalwood", image: UNSPLASH("photo-1585609838498-e098b5765202", 800, 1200), height: "tall" },
  { id: "18", couple: "Tushar & Pallavi", title: "Horizon of Hope", image: UNSPLASH("photo-1532712938310-34cb3982ef74", 800, 900), height: "medium" },
];

export const albumPhotos = (id: string) => [
  UNSPLASH("photo-1519741497674-611481863552", 1200, 800),
  UNSPLASH("photo-1606216794074-735e91aa2c92", 1200, 800),
  UNSPLASH("photo-1583939003579-730e3918a45a", 1200, 800),
  UNSPLASH("photo-1591604466107-ec97de577aff", 1200, 800),
  UNSPLASH("photo-1594909122845-11baa439b7bf", 1200, 800),
  UNSPLASH("photo-1460978812857-470ed1c77af0", 1200, 800),
  UNSPLASH("photo-1511285560929-80b456fea0bc", 1200, 800),
  UNSPLASH("photo-1465495976277-4387d4b0b4c6", 1200, 800),
  UNSPLASH("photo-1519225421980-715cb0215aed", 1200, 800),
];
