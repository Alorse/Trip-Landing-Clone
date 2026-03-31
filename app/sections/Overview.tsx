"use client";

import { Star } from "lucide-react";

export default function Overview() {
  return (
    <section id="overview" className="bg-[#F9FAFB] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col gap-8 lg:flex-row">
          {/* COLUMNA IZQUIERDA (3/4 = 75%) */}
          <div className="lg:w-3/4">
            {/* Título */}
            <h1 className="mb-4 text-3xl font-bold text-[#344054] md:text-4xl">
              Japan Rundreise 2 Wochen: Tradition und Moderne
            </h1>

            {/* Rating */}
            <div className="mb-8 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-[#FDB022] text-[#FDB022]"
                  />
                ))}
                <Star className="h-5 w-5 fill-[#FDB022]/50 text-[#FDB022]" />
              </div>
              <span className="text-sm text-[#667085]">308 Bewertungen</span>
            </div>

            {/* Sección Highlights der Reise */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-[#344054]">
                Highlights der Reise
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <span className="text-[#344054]">
                    Hiroshima & Miyajima: Geschichte erleben
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <span className="text-[#344054]">Der heilige Berg Fuji</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <span className="text-[#344054]">
                    Kyoto & Tokio: Tradition trifft Moderne
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <span className="text-[#344054]">
                    Tempelherberge auf dem Berg Koya
                  </span>
                </li>
              </ul>
            </div>

            {/* Sección Das Japaventura-Erlebnis */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-[#344054]">
                Das Japaventura-Erlebnis
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <a
                    href="#homestay"
                    className="text-[#D55753] hover:underline"
                  >
                    Übernachtung bei einer Gastfamilie
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <a
                    href="#kurama"
                    className="text-[#D55753] hover:underline"
                  >
                    Kurama-Tempel: Mystik der Bergwelt
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <a
                    href="#sushi"
                    className="text-[#D55753] hover:underline"
                  >
                    Sushi-Kochkurs in Kyoto
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                  <a
                    href="#teamlab"
                    className="text-[#D55753] hover:underline"
                  >
                    Digitales Kunstmuseum TeamLab
                  </a>
                </li>
              </ul>
            </div>

            {/* Video Section */}
            <div className="mt-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/kKHU--suGAQ"
                  title="Japan Rundreise Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* SIDEBAR FLOTANTE (1/4 = 25%) - Posición absoluta */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="fixed right-[max(1rem,calc((100vw-80rem)/2+1rem))] top-20 w-[calc(25%-2rem)] max-w-[280px] rounded-lg bg-white p-6 shadow-lg">
              {/* Label Precio */}
              <div className="mb-2 text-sm text-[#667085]">Preis</div>

              {/* Precio */}
              <div className="mb-1 text-4xl font-bold text-[#344054]">
                5.100 EUR
              </div>

              {/* Flüge inklusive */}
              <div className="text-sm text-[#667085]">Flüge inklusive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
