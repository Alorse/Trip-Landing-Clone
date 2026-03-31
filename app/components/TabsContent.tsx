"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import OverviewTab from "./tabs/OverviewTab";
import KarteTab from "./tabs/KarteTab";
import BewertungenTab from "./tabs/BewertungenTab";
import Itinerary from "../sections/Itinerary";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "ubersicht", label: "Übersicht" },
  { id: "karte", label: "Karte" },
  { id: "reiseverlauf", label: "Reiseverlauf" },
  { id: "bewertungen", label: "Bewertungen" },
];

// Sidebar component
function Sidebar() {
  return (
    <div className="hidden lg:block lg:w-1/4">
      <div className="sticky top-24 rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-3 text-lg font-semibold text-[#344054]">
          Japan Rundreise 2 Wochen: Tradition und Moderne
        </h3>
        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-[#344054]">4,6</span>
          <div className="flex">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-[#FDB022] text-[#FDB022]"
              />
            ))}
            <Star className="h-4 w-4 fill-[#FDB022]/50 text-[#FDB022]" />
          </div>
          <span className="text-sm text-[#667085]">(308)</span>
          <span className="ml-2 rounded bg-[#FEF3F2] px-2 py-0.5 text-xs text-[#B42318]">
            Explorer
          </span>
        </div>
        <div className="mb-2 text-sm text-[#667085]">Preis</div>
        <div className="mb-1 text-4xl font-bold text-[#344054]">5.100 EUR</div>
        <div className="mb-6 text-sm text-[#667085]">Flüge inklusive</div>
        <button className="w-full rounded-lg bg-[#D55753] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#D55753]/90">
          Reservieren
        </button>
      </div>
    </div>
  );
}

export default function TabsContent() {
  const [activeTab, setActiveTab] = React.useState("ubersicht");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Scroll to the section
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 60; // Account for sticky tabbar only
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F9FAFB]">
      {/* Tabs Navigation - Sticky */}
      <div className="sticky top-0 z-40 w-full bg-white border-b border-[#E4E7EC]">
        <nav className="flex overflow-x-auto scrollbar-hide justify-center max-w-7xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "relative flex-shrink-0 px-6 py-4 text-sm font-medium transition-colors duration-200 focus:outline-none whitespace-nowrap",
                activeTab === tab.id
                  ? "text-[#344054]"
                  : "text-[#667085] hover:text-[#344054]"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D55753]"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area - All sections rendered, tabs scroll to them */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {/* Übersicht Section */}
            <section id="ubersicht">
              <OverviewTab />
            </section>

            {/* Karte Section */}
            <section id="karte">
              <KarteTab />
            </section>

            {/* Reiseverlauf Section */}
            <section id="reiseverlauf" className="w-full">
              <Itinerary />
            </section>

            {/* Bewertungen Section */}
            <section id="bewertungen">
              <BewertungenTab />
            </section>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
