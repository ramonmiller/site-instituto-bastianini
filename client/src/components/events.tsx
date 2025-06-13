export default function Events() {
  const events = [
    { title: "Evento de pascoa x", progress: 75 },
    { title: "Evento de pascoa x", progress: 45 },
    { title: "Evento de pascoa x", progress: 90 }
  ];

  return (
    <section id="eventos" className="py-20 bg-white section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-blue-800 mb-16">
          eventos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-4">
                  {event.title}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${event.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300"
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
