"use client";

import Image from "next/image";

export default function KarteTab() {
  return (
    <div className="w-full pt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">
        Reiseroute auf der Karte
      </h2>
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://storage.googleapis.com/ventura-static-map-images/12359.png"
          alt="Karte der Japan Rundreise"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {["Fukuoka", "Hiroshima", "Kyoto", "Matsumoto", "Tokio"].map((city) => (
          <div key={city} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D55753]"></span>
            <span className="text-[#344054]">{city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
