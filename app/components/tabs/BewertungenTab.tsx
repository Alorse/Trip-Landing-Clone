"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  author: string;
  image: string;
  trip: string;
  badge: string;
  date: string;
  rating: number;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Luise Carmen P",
    image:
      "https://media.venturatravel.org/unsafe/500x/smart/filters:quality(75):format(webp)/travel_report_photo/84571/bf41a74e-7178-4f41-b85a-5aa31a999d20-A5FE5A71-6DA9-46F5-AF7B-EB653FCF95A9.jpg",
    trip: "Japan Rundreise 2 Wochen",
    badge: "Explorer",
    date: "Januar 2026",
    rating: 5,
    content:
      "Wir haben mit der o.g. Reise, zumindest für uns, einen nahezu perfekten Aufenthalt in Japan erleben dürfen. Das betraf u.a. die gute Kombination von Sehenswürdigkeiten sowohl in ruhiger, ländlicher Gegend als auch in dichtbesiedelten städtischen Regionen und der größten Stadt der Welt, Tokio. Insbesondere die Benutzung öffentlicher Verkehrsmittel, die Einbindung körperlicher Aktivitäten in Form von kleinen Wanderungen und eine moderate eigene Freizeitgestaltung haben uns sehr überzeugt und gaben uns die Möglichkeit das wahre Leben hautnah kennen zu lernen. Besonders positiv hervorheben möchten wir unseren Reiseleiter, Herrn Shafagh Nosrati. Er hat nicht nur das Reiseprogramm einfach mal so abgespult, sondern die einzelnen Programmpunkte immer wieder flexibel unseren Bedürfnissen angepasst.",
  },
  {
    id: 2,
    author: "Jeanne Lelievre",
    image:
      "https://media.venturatravel.org/unsafe/500x/smart/filters:quality(75):format(webp)/profile-picture/896f31ac-953f-4a44-a01b-a5dc72ab4f28-3400f24d-8124-41ed-8a6e-7d7269c4b370-1de38fb8-d23a-4733-a7e4-3eb38ee81c7b.jpeg",
    trip: "Japan Essentials",
    badge: "Explorer",
    date: "",
    rating: 5,
    content:
      "Es war eine wahre Freude, kostbare Momente, und ich war erstaunt, eine bestimmte Lebensqualität zu entdecken. Magische Augenblicke, die ich nie vergessen werde – ich habe mich in den Fuji verliebt. Ja, man kann sich in einen Vulkan verlieben. Ich habe in Tempeln meditiert, umgeben von prächtiger Natur. Ich habe mich verloren, nur um mich selbst wiederzufinden. Der Kontakt mit den Einheimischen war echt und aufrichtig, mit einer beruhigenden Lebensfreude. Ich habe auf diese Reise gewartet, und jetzt bin ich erfüllt.",
  },
  {
    id: 3,
    author: "Fritz Gottlob N",
    image:
      "https://media.venturatravel.org/unsafe/500x/smart/filters:quality(75):format(webp)/travel_report_photo/84513/291f5ef6-0abe-4df2-b4ba-7916b89482b0-9A2A11AB-D0FF-44F3-A46E-9E1A207E3CDE.jpg",
    trip: "Tradition und Moderne",
    badge: "Explorer",
    date: "",
    rating: 5,
    content:
      "Das Format der Reise hat uns besonders gut gefallen. Die Teilnehmerzahl mit zehn Personen war ideal, um schnell eine gute Gruppendynamik zu entwickeln. Die Mischung aus geführten Aktivitäten und freier Zeit war perfekt abgestimmt. Besonders beeindruckt hat uns die Vielfalt des Programms – von traditionellen Tempelübernachtungen bis hin zu modernen Großstadterlebnissen in Tokio. Unser Reiseleiter war kompetent, humorvoll und immer für uns da.",
  },
];

const MAX_CHARS = 155;

function ReviewCard({ review }: { review: Review }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = review.content.length > MAX_CHARS;
  const displayContent =
    shouldTruncate && !isExpanded
      ? review.content.slice(0, MAX_CHARS) + "..."
      : review.content;

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      {/* Header: Avatar, Author, Trip and Rating */}
      <div className="mb-4 flex items-start gap-3">
        {/* Avatar */}
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={review.image}
            alt={review.author}
            fill
            className="object-cover"
            sizes="48px"
            unoptimized
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[#344054]">{review.author}</h3>
          <p className="text-sm text-[#667085]">{review.trip}</p>
          <span className="rounded bg-[#FEF3F2] px-2 py-0.5 text-xs text-[#B42318]">
            {review.badge}
          </span>
          {review.date && (
            <span className="text-xs text-[#667085]">{review.date}</span>
          )}
        </div>
      </div>

      {/* Rating - Now at the bottom */}
      <div className="mt-4 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= review.rating
                ? "fill-[#FDB022] text-[#FDB022]"
                : "fill-gray-200 text-gray-200"
              }`}
          />
        ))}
      </div>

      {/* Badge and Date */}
      <div className="mb-4 flex items-center gap-2"></div>

      {/* Quote Icon */}
      <Quote className="mb-2 h-6 w-6 text-[#D55753]/30" />

      {/* Content */}
      <p className="text-sm leading-relaxed text-[#667085]">{displayContent}</p>

      {/* Show More/Less Button */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-sm font-medium text-[#D55753] hover:underline"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default function BewertungenTab() {
  return (
    <div className="w-full pt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">Bewertungen</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
