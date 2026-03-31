"use client";

import ImageGallery from "@/app/components/ImageGallery";

const reisetagebuchImages = [
  "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
  "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
  "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
];

export default function ReisetagebuchTab() {
  return (
    <div className="w-full pt-8">
      <h2 className="text-2xl font-bold text-[#344054] mb-4">Reisetagebuch</h2>
      <p className="text-[#667085] mb-6">Erfahrungsberichte unserer Gäste...</p>
      <ImageGallery images={reisetagebuchImages} />
    </div>
  );
}
