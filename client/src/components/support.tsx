import { SiReddit, SiX, SiTumblr } from "react-icons/si";
import { Handshake } from "lucide-react";

export default function Support() {
  return (
    <section id="apoio" className="py-16 bg-white section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-gray-800 mb-12">
          Apoio
        </h2>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-16">
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <SiReddit className="text-6xl text-orange-500 mx-auto" />
          </div>
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <SiX className="text-6xl text-black mx-auto" />
          </div>
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <SiTumblr className="text-6xl text-blue-500 mx-auto" />
          </div>
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <Handshake className="text-6xl text-green-500 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
