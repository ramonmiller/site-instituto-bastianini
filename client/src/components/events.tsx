import { ImageIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Events() {
  const events = [
    { title: "Evento de Páscoa X", progress: 75 },
    { title: "Evento de Páscoa Y", progress: 45 },
    { title: "Evento de Páscoa Z", progress: 90 }
  ];

  return (
    <section id="eventos" className="py-16 bg-gray-100 section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-gray-800 mb-12">
          Eventos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <ImageIcon className="text-gray-400 h-16 w-16" />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-4">
                  {event.title}
                </h3>
                <Progress value={event.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
