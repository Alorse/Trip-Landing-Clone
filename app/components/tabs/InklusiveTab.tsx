"use client";

const inklusiveItems = [
  "Flüge mit Lufthansa oder gleichwertiger Airline",
  "Alle Transfers und Fahrten im modernen Reisebus",
  "15 Übernachtungen in ausgewählten Hotels",
  "Übernachtung in traditioneller Tempelherberge",
  "Übernachtung bei japanischer Gastfamilie",
  "Alle Eintritte laut Programm",
  "Sushi-Kochkurs in Kyoto",
  "Teezeremonie-Erlebnis",
];

const nichtInklusiveItems = [
  "Nicht erwähnte Mahlzeiten",
  "Getränke",
  "Trinkgelder",
  "Persönliche Ausgaben",
];

export default function InklusiveTab() {
  return (
    <div className="w-full pt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">Inklusive</h2>

      {/* Dos listados lado a lado */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Inklusive */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-[#344054]">
            Inklusive
          </h3>
          <ul className="space-y-3">
            {inklusiveItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D55753]"></span>
                <span className="text-[#344054]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nicht inklusive */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-[#344054]">
            Nicht inklusive
          </h3>
          <ul className="space-y-3">
            {nichtInklusiveItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#667085]"></span>
                <span className="text-[#344054]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
