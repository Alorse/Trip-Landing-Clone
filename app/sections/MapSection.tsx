"use client";

import Image from "next/image";

export default function MapSection() {
  return (
    <section id="karte" className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://storage.googleapis.com/ventura-static-map-images/12359.png"
            alt="Karte der Japan Rundreise"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
