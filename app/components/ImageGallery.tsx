"use client";

import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  if (!images || images.length < 3) return null;

  return (
    <div className="mb-6 grid grid-cols-3 gap-2">
      {/* Imagen principal - 2/3 del ancho */}
      <div className="col-span-2 row-span-2 relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={images[0]}
          alt="Hauptbild"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
      {/* Dos imágenes pequeñas - 1/3 del ancho, una arriba de la otra */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={images[1]}
          alt="Bild 2"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={images[2]}
          alt="Bild 3"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}
