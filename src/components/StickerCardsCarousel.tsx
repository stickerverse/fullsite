import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
  route: string;
}

const DummyContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
    </div>
  );
};

const data: CardData[] = [
  {
    category: "Design",
    title: "Die Cut Stickers",
    src: "https://i.postimg.cc/59kv5xhg/custom-stickers-hero-1-1-2000x2000.png",
    route: "/designer",
    content: <DummyContent title="Create custom die-cut stickers" description="Design your perfect sticker with our advanced editor. Precisely cut to any shape you desire." />,
  },
  {
    category: "Collections",
    title: "Sticker Sheets",
    src: "https://stickerapp.com/media/400x400/63b85e1479/icon-sticker-sheet-400x400.png",
    route: "/shop",
    content: <DummyContent title="Multiple designs on one sheet" description="Get more value with sticker sheets featuring multiple designs in one convenient package." />,
  },
  {
    category: "Typography",
    title: "Text Decals",
    src: "https://stickerapp.com/media/400x400/c4dd7b4b6a/icon-heavy-duty-sticker-400x400.png",
    route: "/shop",
    content: <DummyContent title="Professional text decals" description="Clean, professional text decals with no background. Perfect for branding and labeling." />,
  },
  {
    category: "Marketplace",
    title: "Sticker Shop",
    src: "https://stickerapp.com/media/400x400/95570fc805/sticker-shop-logo-400x400.png",
    route: "/shop",
    content: <DummyContent title="Browse our marketplace" description="Discover thousands of unique sticker designs from talented creators around the world." />,
  },
];

export function StickerCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-slate-50">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
        Choose Your Sticker Style
      </h2>
      <Carousel items={cards} />
    </div>
  );
}