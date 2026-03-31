"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "ubersicht", label: "Übersicht" },
  { id: "karte", label: "Karte" },
  { id: "reiseverlauf", label: "Reiseverlauf" },
  { id: "reiseleiter", label: "Reiseleiter" },
  { id: "termine-preise", label: "Termine & Preise" },
  { id: "inklusive", label: "Inklusive" },
  { id: "bewertungen", label: "Bewertungen" },
  { id: "reisetagebuch", label: "Reisetagebuch" },
  { id: "wissenswertes", label: "Wissenswertes" },
];

interface TabsNavProps {
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function TabsNav({
  defaultTab = "termine-preise",
  onTabChange,
}: TabsNavProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="w-full bg-white border-b border-[#E4E7EC]">
      <nav className="flex overflow-x-auto scrollbar-hide justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative flex-shrink-0 px-6 py-4 text-sm font-medium transition-colors duration-200 focus:outline-none whitespace-nowrap",
              activeTab === tab.id
                ? "text-[#344054]"
                : "text-[#667085] hover:text-[#344054]",
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
  );
}
