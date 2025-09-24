"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const Card = React.memo(
  ({
    card,
    index,
  }: {
    card: any;
    index: number;
  }) => {
    const [hovered, setHovered] = useState<number | null>(null);
    
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => window.location.href = card.route}
        className="cursor-pointer rounded-3xl bg-gray-100 dark:bg-neutral-900 h-60 md:h-96 w-56 md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-sm text-gray-300 mb-2">{card.category}</div>
          <div className="text-xl md:text-2xl font-bold text-white">
            {card.title}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function Carousel({ items, initialScroll = 0 }: CarouselProps) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}>
        </div>

        <div className={cn("flex flex-row justify-start gap-4 pl-4", "max-w-7xl mx-auto")}>
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}