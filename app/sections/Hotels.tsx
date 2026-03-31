"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface HotelImage {
  src: string;
  alt: string;
  type: "exterior" | "room";
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  nights: number;
  amenities: string[];
  images: HotelImage[];
}

const hotelsData: Hotel[] = [
  {
    id: "fukuoka",
    name: "Hotel Nikko Fukuoka",
    location: "Fukuoka",
    description:
      "Modernes 4-Sterne-Hotel im Herzen von Fukuoka, nur wenige Gehminuten vom Hakata-Bahnhof entfernt. Perfekte Lage für die Erkundung der Stadt.",
    rating: 4.5,
    nights: 2,
    amenities: ["WLAN", "Restaurant", "Fitness", "Concierge"],
    images: [
      {
        src: "/images/hotels/fukuoka-exterior-1.jpg",
        alt: "Hotel Nikko Fukuoka Außenansicht",
        type: "exterior",
      },
      {
        src: "/images/hotels/fukuoka-exterior-2.jpg",
        alt: "Hotel Nikko Fukuoka Eingang",
        type: "exterior",
      },
      {
        src: "/images/hotels/fukuoka-room.jpg",
        alt: "Hotel Nikko Fukuoka Zimmer",
        type: "room",
      },
    ],
  },
  {
    id: "hiroshima",
    name: "Sheraton Grand Hiroshima",
    location: "Hiroshima",
    description:
      "Elegantes Hotel mit Blick auf den Fluss Ōta. Ideale Ausgangslage für den Besuch des Friedensparks und die Fahrt nach Miyajima.",
    rating: 4.6,
    nights: 2,
    amenities: ["WLAN", "Spa", "Pool", "Restaurant"],
    images: [
      {
        src: "/images/hotels/hiroshima-exterior-1.jpg",
        alt: "Sheraton Grand Hiroshima Außenansicht",
        type: "exterior",
      },
      {
        src: "/images/hotels/hiroshima-exterior-2.jpg",
        alt: "Sheraton Grand Hiroshima Terrasse",
        type: "exterior",
      },
      {
        src: "/images/hotels/hiroshima-room.jpg",
        alt: "Sheraton Grand Hiroshima Zimmer",
        type: "room",
      },
    ],
  },
  {
    id: "koyasan",
    name: "Ekoin Tempelunterkunft",
    location: "Koyasan",
    description:
      "Authentische Shukubo-Erfahrung in einem buddhistischen Tempel. Erleben Sie das Morgengebet und genießen Sie traditionelle Shojin-Ryori (vegetarische Tempelküche).",
    rating: 4.8,
    nights: 1,
    amenities: ["Morgengebet", "Abendessen", "Garten", "Meditation"],
    images: [
      {
        src: "/images/hotels/koyasan-exterior-1.jpg",
        alt: "Ekoin Tempel Außenansicht",
        type: "exterior",
      },
      {
        src: "/images/hotels/koyasan-exterior-2.jpg",
        alt: "Ekoin Tempel Garten",
        type: "exterior",
      },
      {
        src: "/images/hotels/koyasan-room.jpg",
        alt: "Ekoin Tempel Zimmer",
        type: "room",
      },
    ],
  },
  {
    id: "kyoto",
    name: "Kyoto Brighton Hotel",
    location: "Kyoto",
    description:
      "Traditionelles Ryokan-Erlebnis kombiniert mit modernem Komfort. Zentral gelegen für die Erkundung der historischen Tempel und Schreine Kyotos.",
    rating: 4.7,
    nights: 4,
    amenities: ["WLAN", "Onsen", "Garten", "Teezeremonie"],
    images: [
      {
        src: "/images/hotels/kyoto-exterior-1.jpg",
        alt: "Kyoto Brighton Hotel Außenansicht",
        type: "exterior",
      },
      {
        src: "/images/hotels/kyoto-exterior-2.jpg",
        alt: "Kyoto Brighton Hotel Garten",
        type: "exterior",
      },
      {
        src: "/images/hotels/kyoto-room.jpg",
        alt: "Kyoto Brighton Hotel Zimmer",
        type: "room",
      },
    ],
  },
  {
    id: "matsumoto",
    name: "Tobira Onsen Myojinkan",
    location: "Matsumoto",
    description:
      "Traditionelles Onsen-Ryokan mit Blick auf die japanischen Alpen. Entspannen Sie in den natürlichen heißen Quellen nach der Nakasendo-Wanderung.",
    rating: 4.9,
    nights: 1,
    amenities: ["Onsen", "Kaiseki", "Bergblick", "Yukata"],
    images: [
      {
        src: "/images/hotels/matsumoto-exterior-1.jpg",
        alt: "Tobira Onsen Myojinkan Außenansicht",
        type: "exterior",
      },
      {
        src: "/images/hotels/matsumoto-exterior-2.jpg",
        alt: "Tobira Onsen Myojinkan Onsen",
        type: "exterior",
      },
      {
        src: "/images/hotels/matsumoto-room.jpg",
        alt: "Tobira Onsen Myojinkan Zimmer",
        type: "room",
      },
    ],
  },
  {
    id: "tokyo",
    name: "Park Hyatt Tokyo",
    location: "Tokyo",
    description:
      "Ikonisches Luxushotel in Shinjuku mit atemberaubendem Blick auf die Stadt. Bekannt aus dem Film 'Lost in Translation' - perfekter Abschluss Ihrer Reise.",
    rating: 4.8,
    nights: 4,
    amenities: ["WLAN", "Spa", "Pool", "Sky Bar"],
    images: [
      {
        src: "/images/hotels/tokyo-exterior-1.jpg",
        alt: "Park Hyatt Tokyo Außenansicht",
        type: "exterior",
      },
      {
        src: "/images/hotels/tokyo-exterior-2.jpg",
        alt: "Park Hyatt Tokyo Lobby",
        type: "exterior",
      },
      {
        src: "/images/hotels/tokyo-room.jpg",
        alt: "Park Hyatt Tokyo Zimmer",
        type: "room",
      },
    ],
  },
];

// Lightbox component
function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: HotelImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Schließen"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        className="relative h-[80vh] w-[90vw] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

// Hotel Card component
function HotelCard({ hotel }: { hotel: Hotel }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + hotel.images.length) % hotel.images.length
    );
  };

  return (
    <>
      <div className="group overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
        {/* Image Gallery Grid */}
        <div className="grid h-64 grid-cols-3 gap-1">
          {/* Main large image */}
          <div
            className="relative col-span-2 cursor-pointer overflow-hidden"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={hotel.images[0].src}
              alt={hotel.images[0].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 66vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          {/* Two smaller images stacked */}
          <div className="flex flex-col gap-1">
            <div
              className="relative flex-1 cursor-pointer overflow-hidden"
              onClick={() => openLightbox(1)}
            >
              <Image
                src={hotel.images[1].src}
                alt={hotel.images[1].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 17vw"
              />
            </div>
            <div
              className="relative flex-1 cursor-pointer overflow-hidden"
              onClick={() => openLightbox(2)}
            >
              <Image
                src={hotel.images[2].src}
                alt={hotel.images[2].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 17vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium">Zimmer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location & Rating */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm text-[#667085]">
              <MapPin className="h-4 w-4" />
              <span>{hotel.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#FDB022] text-[#FDB022]" />
              <span className="text-sm font-medium text-[#344054]">
                {hotel.rating}
              </span>
            </div>
          </div>

          {/* Hotel Name */}
          <h3 className="mb-2 text-xl font-semibold text-[#344054]">
            {hotel.name}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-[#667085]">
            {hotel.description}
          </p>

          {/* Nights Badge */}
          <div className="mb-4 inline-flex items-center rounded-full bg-[#F2F4F7] px-3 py-1 text-sm font-medium text-[#344054]">
            {hotel.nights} {hotel.nights === 1 ? "Nacht" : "Nächte"}
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity, index) => (
              <span
                key={index}
                className="rounded-lg border border-[#E4E7EC] bg-[#F9FAFB] px-3 py-1.5 text-xs text-[#667085]"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={hotel.images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}

export default function Hotels() {
  return (
    <section className="w-full py-8">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-[#344054]">
          Ihre Hotels
        </h2>
        <p className="text-[#667085]">
          Sorgfältig ausgewählte Unterkünfte für ein authentisches Japan-Erlebnis
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {hotelsData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
