"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Welche Dokumente benötige ich für die Einreise nach Japan?",
    answer: "Für die Einreise nach Japan benötigen Sie einen Reisepass, der mindestens 6 Monate über das geplante Rückreisedatum hinaus gültig ist. Deutsche Staatsangehörige können bis zu 90 Tage visumfrei in Japan reisen. Für die Einreise ist auch ein Rückflugticket sowie der Nachweis über ausreichende finanzielle Mittel erforderlich.",
  },
  {
    id: "faq-2",
    question: "Ist die Reise auch für alleinreisende Frauen geeignet?",
    answer: "Ja, Japan gilt als eines der sichersten Länder der Welt. Alleinerziehende Reisende, auch Frauen, fühlen sich hier in der Regel sehr sicher. Unsere Gruppenreisen bieten zusätzlich den Vorteil, dass Sie in einer begleiteten Gruppe unterwegs sind und sich auf den Reiseleiter verlassen können.",
  },
  {
    id: "faq-3",
    question: "Wie ist das Wetter während der Reisezeit?",
    answer: "Die beste Reisezeit für Japan ist der Frühling (März bis Mai) und der Herbst (September bis November). Im Frühling blühen die Kirschbäume und die Temperaturen sind mild. Im Herbst erleben Sie das farbenfrohe Laub. Die Sommer können heiß und feucht sein, während die Winter je nach Region kühl bis kalt sind.",
  },
  {
    id: "faq-4",
    question: "Sind Mahlzeiten im Reisepreis enthalten?",
    answer: "Das Frühstück ist an allen Tagen im Reisepreis enthalten. Zusätzlich sind ausgewählte Abendessen und das Mittagessen beim Sushi-Kochkurs inkludiert. Die nicht enthaltenen Mahlzeiten bieten Ihnen die Möglichkeit, auf eigene Faust die japanische Küche zu entdecken. Ihr Reiseleiter gibt Ihnen gerne Empfehlungen für Restaurants.",
  },
  {
    id: "faq-5",
    question: "Wie viel Geld sollte ich für den persönlichen Bedarf mitnehmen?",
    answer: "Wir empfehlen, etwa 500-800 EUR für persönliche Ausgaben mitzubringen. Dazu gehören nicht enthaltene Mahlzeiten (ca. 15-30 EUR pro Mahlzeit), Getränke, Trinkgelder und Einkäufe. In Japan können Sie an vielen Stellen mit Kreditkarte zahlen, aber Bargeld ist nach wie vor weit verbreitet, besonders in kleineren Geschäften und Restaurants.",
  },
];

function FAQContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function WissenswertesTab() {
  return (
    <div className="w-full pt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#344054]">FAQs</h2>
      <p className="mb-8 text-[#667085]">
        Häufig gestellte Fragen zu unserer Japan-Reise.
      </p>

      <Accordion defaultValue={[]} className="space-y-3">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="rounded-lg border border-[#E4E7EC] bg-white px-6 transition-all duration-300 data-[state=open]:border-[#D55753]/30 data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="py-4 text-left hover:no-underline group">
              <span className="text-base font-medium text-[#344054] transition-colors group-data-[state=open]:text-[#D55753]">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <FAQContent>
                <p className="text-[#667085] pb-4">{faq.answer}</p>
              </FAQContent>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}