"use client";

import { Star } from "lucide-react";

export default function OverviewTab() {
  return (
    <div className="w-full">
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

      {/* Highlights + Japaventura-Erlebnis - Side by side */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección Highlights der Reise */}
        <div>
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
              <a href="#homestay" className="text-[#D55753] hover:underline">
                Übernachtung bei einer Gastfamilie
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
              <a href="#kurama" className="text-[#D55753] hover:underline">
                Kurama-Tempel: Mystik der Bergwelt
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
              <a href="#sushi" className="text-[#D55753] hover:underline">
                Sushi-Kochkurs in Kyoto
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
              <a href="#teamlab" className="text-[#D55753] hover:underline">
                Digitales Kunstmuseum TeamLab
              </a>
            </li>
          </ul>
        </div>
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
  );
}
