"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Mountain,
  Building2,
  Home,
  Users,
  Trees,
  ChefHat,
  Palette,
} from "lucide-react";

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const highlights = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Hiroshima & Miyajima: Geschichte erleben",
    description: "Besuche den Friedenspark und die berühmte schwimmende Torii",
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Der heilige Berg Fuji",
    description: "Erlebe die majestätische Schönheit des Mount Fuji",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Kyoto & Tokio: Tradition trifft Moderne",
    description: "Kontrast zwischen historischen Tempeln und moderner Metropole",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Tempelherberge auf dem Berg Koya",
    description: "Übernachtung in einem buddhistischen Tempel mit Morgengebet",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Übernachtung bei einer Gastfamilie",
    description: "Authentische japanische Gastfreundschaft in Wazuka",
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "Kurama-Tempel: Mystik der Bergwelt",
    description: "Spirituelle Wanderung durch die Berge Kyotos",
  },
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Sushi-Kochkurs in Kyoto",
    description: "Lerne von Profis die Kunst des Sushi-Machens",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Digitales Kunstmuseum TeamLab",
    description: "Moderne Kunst in Tokio",
  },
];

const destinations = [
  "Fukuoka",
  "Hiroshima",
  "Miyajima",
  "Nara",
  "Wazuka",
  "Koyasan",
  "Kyoto",
  "Nakasendo",
  "Matsumoto",
  "Tokio",
];

function HighlightCard({ icon, title, description, index }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="w-14 h-14 rounded-lg bg-[#005470]/10 flex items-center justify-center text-[#005470] mb-4 group-hover:bg-[#005470] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Highlights() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Highlights deiner Reise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Erlebe unvergessliche Momente und entdecke die faszinierende Kultur
            Japans
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              index={index}
            />
          ))}
        </div>

        {/* Destinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Reiseziele
          </h3>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
            {destinations.map((city, index) => (
              <span key={city} className="flex items-center">
                <span className="text-gray-700 font-medium px-3 py-1 rounded-full bg-gray-50 hover:bg-[#005470]/10 hover:text-[#005470] transition-colors duration-200 cursor-default">
                  {city}
                </span>
                {index < destinations.length - 1 && (
                  <span className="text-[#D55753] mx-2 font-bold">•</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
