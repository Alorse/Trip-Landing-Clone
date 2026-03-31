"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageGallery from "@/app/components/ImageGallery";

interface DayItinerary {
  day: number;
  route: string;
  title: string;
  description?: string;
  activities?: string[];
  meals?: string[];
  images?: string[];
}

const itineraryData: DayItinerary[] = [
  {
    day: 1,
    route: "Frankfurt - Fukuoka",
    title: "Frankfurt: Auf geht's nach Japan!",
    description: "Anreise nach Japan und erste Erkundungen in Fukuoka.",
    activities: [
      "Abflug von Frankfurt",
      "Ankunft in Fukuoka",
      "Transfer zum Hotel",
      "Erster Spaziergang durch die Stadt",
    ],
    meals: ["Abendessen"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 2,
    route: "Fukuoka",
    title: "Fukuoka: Die freundliche Stadt im Süden",
    description: "Erkundung der lebendigen Stadt Fukuoka mit ihren berühmten Yatai.",
    activities: [
      "Ohori-Park",
      "Fukuoka Castle Ruins",
      "Canal City Hakata",
      "Yatai (Straßenstände) am Abend",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 3,
    route: "Fukuoka - Hiroshima",
    title: "Hiroshima: Geschichte und Frieden",
    description: "Fahrt mit dem Shinkansen nach Hiroshima und Besuch des Friedensparks.",
    activities: [
      "Shinkansen-Fahrt",
      "Friedenspark",
      "Atombombenkuppel",
      "Friedensmuseum",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 4,
    route: "Hiroshima",
    title: "Miyajima: Das schwimmende Torii",
    description: "Tagesausflug zur heiligen Insel Miyajima.",
    activities: [
      "Fahrt zur Insel Miyajima",
      "Itsukushima-Schrein",
      "Schwimmendes Torii",
      "Freizeit auf der Insel",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 5,
    route: "Hiroshima - Nara - Wazuka-cho",
    title: "Nara: Die freundlichen Rehe",
    description: "Besuch der historischen Stadt Nara und Weiterfahrt nach Wazuka.",
    activities: [
      "Todaiji-Tempel",
      "Großer Buddha",
      "Freundliche Rehe im Park",
      "Fahrt nach Wazuka-cho",
    ],
    meals: ["Frühstück", "Abendessen"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 6,
    route: "Wazuka-cho - Koyasan",
    title: "Teezeremonie und Tempelübernachtung",
    description: "Erlebnis bei einer Gastfamilie und Übernachtung in einem Tempel.",
    activities: [
      "Teezeremonie bei Gastfamilie",
      "Fahrt zum Koyasan",
      "Ankunft im Tempel",
      "Buddhistisches Abendessen",
    ],
    meals: ["Frühstück", "Abendessen"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 7,
    route: "Koyasan - Kyoto",
    title: "Morgengebet und Fahrt nach Kyoto",
    description: "Frühes Morgengebet mit den Mönchen und Weiterfahrt nach Kyoto.",
    activities: [
      "Morgengebet mit Mönchen",
      "Okunoin-Friedhof",
      "Fahrt nach Kyoto",
      "Ankunft in Kyoto",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 8,
    route: "Kyoto",
    title: "Kyoto: Tempel und Schreine",
    description: "Erkundung der historischen Hauptstadt Japans.",
    activities: [
      "Kinkaku-ji (Goldener Pavillon)",
      "Nijo-Schloss",
      "Gion Viertel",
      "Traditionelle Straßen",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 9,
    route: "Kyoto",
    title: "Sushi-Kochkurs und Geisha-Viertel",
    description: "Aktiver Tag mit Kochkurs und Erkundung von Gion.",
    activities: [
      "Sushi-Kochkurs",
      "Besuch des Nishiki-Marktes",
      "Gion Viertel",
      "Freier Nachmittag",
    ],
    meals: ["Frühstück", "Mittagessen"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 10,
    route: "Kyoto",
    title: "Fushimi Inari und Kimono-Erlebnis",
    description: "Wanderung durch die tausend Torii und Kimono-Tragen.",
    activities: [
      "Fushimi Inari-Schrein",
      "Wanderung durch die Torii",
      "Kimono-Erfahrung",
      "Matcha-Zeremonie",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 11,
    route: "Kyoto - Tsumago - Matsumoto",
    title: "Nakasendo-Wanderweg",
    description: "Wanderung auf dem historischen Postweg.",
    activities: [
      "Fahrt zum Nakasendo",
      "Wanderung Tsumago - Magome",
      "Traditionelle Poststation",
      "Fahrt nach Matsumoto",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 12,
    route: "Matsumoto - Fujikawaguchiko - Tokio",
    title: "Matsumoto-Schloss und Fuji",
    description: "Besuch des schwarzen Schlosses und Fahrt zum Fuji.",
    activities: [
      "Matsumoto-Schloss",
      "Fahrt zum Fuji",
      "Fujikawaguchiko",
      "Ankunft in Tokio",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 13,
    route: "Tokio",
    title: "Tokio: Tradition und Moderne",
    description: "Erste Erkundung der Hauptstadt Japans.",
    activities: [
      "Meiji-Schrein",
      "Harajuku",
      "Shibuya Crossing",
      "Shibuya Sky",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 14,
    route: "Tokio",
    title: "TeamLab und Asakusa",
    description: "Digitale Kunst und traditioneller Stadtteil.",
    activities: [
      "TeamLab Digitales Kunstmuseum",
      "Asakusa",
      "Sensoji-Tempel",
      "Nakamise-Straße",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 15,
    route: "Tokio",
    title: "Freier Tag in Tokio",
    description: "Zeit zur eigenen Erkundung der Stadt.",
    activities: [
      "Freier Tag",
      "Optionale Ausflüge verfügbar",
      "Shopping",
      "Entdecken auf eigene Faust",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
  {
    day: 16,
    route: "Tokio - Frankfurt",
    title: "Abschied von Japan",
    description: "Rückflug nach Deutschland.",
    activities: [
      "Check-out",
      "Transfer zum Flughafen",
      "Abflug",
      "Ankunft in Frankfurt",
    ],
    meals: ["Frühstück"],
    images: [
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/84408/b5a7efd0-81f3-4b17-9e70-890adaf5bf47-5F243C2E-8B85-42F0-89FC-C245A2A1C4D0.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/img/2048x1536/248062.jpg",
      "https://media.venturatravel.org/unsafe/700x/smart/filters:quality(75):format(webp)/travel_report_photo/82452/42c82370-55ef-4432-9db4-e4edbe3baa4b-5BDA0B33-827E-4720-B0DC-3280843C859C.jpg",
    ],
  },
];

export default function Itinerary() {
  return (
    <section className="w-full py-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">
        Reiseverlauf
      </h2>

      <Accordion defaultValue={["day-2"]} className="space-y-3">
        {itineraryData.map((day) => (
          <AccordionItem
            key={day.day}
            value={`day-${day.day}`}
            className="rounded-lg border border-[#E4E7EC] bg-white px-6 data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex flex-1 items-center justify-between pr-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D55753] text-sm font-bold text-white">
                    {day.day}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#667085]">
                      Tag {day.day} - {day.route}
                    </p>
                    <p className="text-base font-semibold text-[#344054]">
                      {day.title}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="pl-14">
                {/* Galería de imágenes */}
                {day.images && <ImageGallery images={day.images} />}

                {day.description && (
                  <p className="mb-4 text-[#344054]">{day.description}</p>
                )}

                {day.activities && day.activities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-[#344054]">
                      Aktivitäten:
                    </h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[#667085]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {day.meals && day.meals.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-[#344054]">
                      Verpflegung:
                    </h4>
                    <p className="text-[#667085]">{day.meals.join(", ")}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
