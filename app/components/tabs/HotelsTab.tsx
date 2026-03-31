"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";

interface Hotel {
  id: string;
  name: string;
  location: string;
  nights: number;
  rating: number;
  description: string;
  images: {
    exterior1: string;
    exterior2: string;
    room: string;
  };
}

const hotels: Hotel[] = [
  {
    id: "fukuoka",
    name: "Hotel Nikko Fukuoka",
    location: "Fukuoka",
    nights: 2,
    rating: 4.5,
    description: "Elegantes Hotel im Herzen von Fukuoka, nur wenige Schritte vom Hakata Bahnhof entfernt.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      room: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    },
  },
  {
    id: "hiroshima",
    name: "Sheraton Grand Hiroshima",
    location: "Hiroshima",
    nights: 2,
    rating: 4.7,
    description: "Luxuriöses Hotel mit Blick auf den Friedenspark und erstklassigem Service.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      room: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    },
  },
  {
    id: "wazuka",
    name: "Wazuka Gastfamilie",
    location: "Wazuka-cho",
    nights: 1,
    rating: 4.9,
    description: "Authentische Übernachtung bei einer traditionellen Tee-Gastfamilie.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      room: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    },
  },
  {
    id: "koyasan",
    name: "Shukubo Tempel Koyasan",
    location: "Koyasan",
    nights: 1,
    rating: 4.8,
    description: "Einzigartige Tempelübernachtung mit vegetarischer Küche und Morgengebet.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      room: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    },
  },
  {
    id: "kyoto",
    name: "The Thousand Kyoto",
    location: "Kyoto",
    nights: 4,
    rating: 4.6,
    description: "Modernes Boutique-Hotel nahe dem Kyoto Bahnhof mit traditionellen Akzenten.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      room: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    },
  },
  {
    id: "matsumoto",
    name: "Matsumoto Hotel Kagetsu",
    location: "Matsumoto",
    nights: 1,
    rating: 4.4,
    description: "Historisches Hotel mit Blick auf die Japanischen Alpen.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      room: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    },
  },
  {
    id: "tokyo",
    name: "Park Hyatt Tokyo",
    location: "Tokio",
    nights: 4,
    rating: 4.9,
    description: "Ikonisches Luxushotel in Shinjuku mit atemberaubendem Stadtblick.",
    images: {
      exterior1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      exterior2: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      room: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    },
  },
];

function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Schließen"
      >
        <X className="h-6 w-6" />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="relative h-[80vh] w-[90vw] max-w-5xl">
        <Image
          src={images[currentIndex]}
          alt={`Hotel Bild ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function HotelCard({ hotel }: { hotel: Hotel }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [hotel.images.exterior1, hotel.images.exterior2, hotel.images.room];
  const imageLabels = ["Außenansicht", "Außenansicht", "Zimmer"];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div className="group overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-1">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={img}
                alt={`${hotel.name} - ${imageLabels[idx]}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/20" />
              <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
                {imageLabels[idx]}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#344054]">{hotel.name}</h3>
              <div className="mt-1 flex items-center gap-1.5 text-sm text-[#667085]">
                <MapPin className="h-3.5 w-3.5" />
                <span>{hotel.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-[#FEF9E7] px-2 py-1">
              <Star className="h-4 w-4 fill-[#FDB022] text-[#FDB022]" />
              <span className="text-sm font-semibold text-[#344054]">{hotel.rating}</span>
            </div>
          </div>

          <p className="mb-4 text-sm text-[#667085] leading-relaxed">{hotel.description}</p>

          <div className="flex items-center justify-between border-t border-[#E4E7EC] pt-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#D55753]/10 px-3 py-1 text-xs font-medium text-[#D55753]">
                {hotel.nights} {hotel.nights === 1 ? "Nacht" : "Nächte"}
              </span>
            </div>
            <button
              onClick={() => openLightbox(0)}
              className="text-sm font-medium text-[#D55753] transition-colors hover:text-[#D55753]/80"
            >
              Alle Fotos ansehen
            </button>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}

export default function HotelsTab() {
  return (
    <section className="w-full py-8">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-[#344054]">Unterkünfte</h2>
        <p className="text-[#667085]">
          Sorgfältig ausgewählte Hotels und authentische Übernachtungen entlang Ihrer Reiseroute
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-[#F0FDF4] p-4">
        <p className="text-sm text-[#166534]">
          <strong>Hinweis:</strong> Alle Unterkünfte sind im Reisepreis inbegriffen. 
          Hotelupgrades sind auf Anfrage gegen Aufpreis verfügbar.
        </p>
      </div>
    </section>
  );
}
