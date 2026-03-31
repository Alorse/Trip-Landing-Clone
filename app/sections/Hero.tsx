"use client";

export default function Hero() {
  return (
    <section className="relative h-[580px] w-full overflow-hidden">
      {/* Background image - Japan group photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      />

      {/* Main Content - Centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <h1 className="mb-4 text-[48px] font-bold leading-tight text-white">
          Japan Rundreise 2 Wochen
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-[20px] font-normal text-white">
          Japan Rundreise 16 Tage
        </p>

        {/* CTA Button */}
        <button
          className="mb-6 rounded px-8 py-4 text-lg font-semibold text-white transition-colors"
          style={{ backgroundColor: "#D55753" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#C44A46")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#D55753")
          }
        >
          Jetzt Platz sichern
        </button>

        {/* Badge */}
        <div
          className="rounded px-4 text-[14px] font-medium"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          Reise garantiert · keine Mindestteilnehmerzahl
        </div>
      </div>

      {/* Info Bar - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white">
        <div className="mx-auto flex max-w-4xl" style={{ height: "80px" }}>
          {/* Column 1 */}
          <div
            className="flex flex-1 flex-col items-center justify-center border-r px-4"
            style={{ borderColor: "#E4E7EC" }}
          >
            <div className="text-sm" style={{ color: "#667085" }}>
              Länge
            </div>
            <div className="text-lg font-semibold" style={{ color: "#344054" }}>
              16 Tage
            </div>
          </div>

          {/* Column 2 */}
          <div
            className="flex flex-1 flex-col items-center justify-center border-r px-4"
            style={{ borderColor: "#E4E7EC" }}
          >
            <div className="text-sm" style={{ color: "#667085" }}>
              Gruppengröße
            </div>
            <div className="text-lg font-semibold" style={{ color: "#344054" }}>
              Kostenlose Stornierung
            </div>
          </div>

          {/* Column 3 */}
          <div
            className="flex flex-1 flex-col items-center justify-center border-r px-4"
            style={{ borderColor: "#E4E7EC" }}
          >
            <div className="text-sm" style={{ color: "#667085" }}>
              Reiseart
            </div>
            <div className="text-lg font-semibold" style={{ color: "#344054" }}>
              Privatreise
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-1 flex-col items-center justify-center px-4">
            <div className="text-sm" style={{ color: "#667085" }}>
              Angebot
            </div>
            <div className="text-lg font-semibold" style={{ color: "#344054" }}>
              Günstige Hotelupgrades
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
