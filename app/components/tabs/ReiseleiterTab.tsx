"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Guide {
  id: number;
  name: string;
  image: string;
  rating: number;
  description: string;
}

const guides: Guide[] = [
  {
    id: 1,
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    description: "Yuki ist ein erfahrener Reiseleiter mit über 10 Jahren Erfahrung. Er spricht fließend Deutsch und Englisch und kennt jeden Winkel Japans. Seine Leidenschaft für die japanische Kultur und Geschichte macht jede Reise zu einem unvergesslichen Erlebnis.",
  },
  {
    id: 2,
    name: "Sakura Yamamoto",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    description: "Sakura ist Expertin für traditionelle japanische Künste und Küche. Sie führt unsere Gäste durch die verborgenen Schätze Kyotos und zeigt ihnen die Geheimnisse der japanischen Teezeremonie. Ihr warmherziges Wesen begeistert alle Reisenden.",
  },
  {
    id: 3,
    name: "Kenji Sato",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 4,
    description: "Kenji ist ein begeisterter Wanderer und Naturliebhaber. Er kennt die besten Routen am Fuji und im Koyasan. Seine Geschichten über die japanische Mythologie und seine humorvolle Art machen ihn zu einem beliebten Begleiter auf unseren Touren.",
  },
  {
    id: 4,
    name: "Aiko Nakamura",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    description: "Aiko ist in Tokio aufgewachsen und kennt die Stadt wie ihre Westentasche. Sie zeigt unseren Gästen nicht nur die bekannten Sehenswürdigkeiten, sondern auch die versteckten Oasen der Metropole. Ihr Wissen über moderne japanische Popkultur ist unübertroffen.",
  },
];

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      {/* Top row: Photo (2/5) + Name/Rating (3/5) */}
      <div className="mb-4 flex gap-4">
        {/* Photo - 2/5 */}
        <div className="w-2/5">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={guide.image}
              alt={guide.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 200px"
              unoptimized
            />
          </div>
        </div>
        {/* Name and Rating - 3/5 */}
        <div className="flex w-3/5 flex-col justify-center">
          <h3 className="mb-2 text-xl font-bold text-[#344054]">{guide.name}</h3>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "h-5 w-5",
                  star <= guide.rating
                    ? "fill-[#FDB022] text-[#FDB022]"
                    : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
            <span className="ml-2 text-sm text-[#667085]">({guide.rating}/5)</span>
          </div>
        </div>
      </div>
      {/* Description - 5/5 full width */}
      <p className="text-[#667085]">{guide.description}</p>
    </div>
  );
}

export default function ReiseleiterTab() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerView = 2;
  const maxIndex = Math.ceil(guides.length / itemsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleGuides = guides.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <div className="w-full pt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">Reiseleiter</h2>
      <p className="mb-8 text-[#667085]">
        Unser erfahrenes Team von Reiseleitern begleitet Sie auf Ihrer Japan-Reise
        und sorgt für unvergessliche Erlebnisse.
      </p>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
          aria-label="Vorherige"
        >
          <ChevronLeft className="h-6 w-6 text-[#344054]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
          aria-label="Nächste"
        >
          <ChevronRight className="h-6 w-6 text-[#344054]" />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                idx === currentIndex
                  ? "w-6 bg-[#D55753]"
                  : "bg-[#E4E7EC] hover:bg-[#D55753]/50"
              )}
              aria-label={`Gehe zu Seite ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
