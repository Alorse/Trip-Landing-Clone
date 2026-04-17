"use client";

import React from "react";
import { Star } from "lucide-react";

export default function OverviewTab() {
  return (
    <div className="w-full pt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">Übersicht</h2>
      <p className="text-[#667085]">
        Resumen de la JAPAVENTURA tour. (placeholder)
      </p>
      <div className="mt-4">
        <Star className="h-4 w-4 text-[#FDB022]" />
      </div>
    </div>
  );
}