import { SiReddit, SiX, SiTumblr } from "react-icons/si";
import { Hash } from "lucide-react";

export default function Support() {
  return (
    <section id="apoio" className="py-20 bg-gray-50 section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-blue-800 mb-16">
          Apoio
        </h2>
        
        <div className="flex justify-center items-center space-x-12 md:space-x-20">
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">Re</span>
            </div>
          </div>
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto">
              <SiX className="text-white text-2xl" />
            </div>
          </div>
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">t</span>
            </div>
          </div>
          <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto">
              <Hash className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
