import { ImageIcon } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-secondary section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-gray-800 mb-12">
          Quem Somos
        </h2>
        
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Block */}
          <div className="text-center md:text-left">
            <div className="placeholder-image h-48 mb-6">
              <ImageIcon className="text-gray-400 h-16 w-16" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          
          {/* Right Block */}
          <div className="flex items-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Block */}
          <div className="flex items-center md:order-1 order-2">
            <p className="text-gray-700 leading-relaxed text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
            </p>
          </div>
          
          {/* Right Block */}
          <div className="text-center md:text-right md:order-2 order-1">
            <div className="placeholder-image h-48 mb-6">
              <ImageIcon className="text-gray-400 h-16 w-16" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
