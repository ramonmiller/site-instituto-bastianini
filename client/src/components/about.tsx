import { ImageIcon } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-gray-800 mb-16">
          Quem somos
        </h2>
        
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Block */}
          <div className="order-1">
            <div className="placeholder-image h-64 mb-6 rounded-lg">
              <ImageIcon className="text-gray-400 h-20 w-20" />
            </div>
          </div>
          
          {/* Right Block */}
          <div className="order-2 flex items-center">
            <p className="text-gray-700 leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Block */}
          <div className="order-2 md:order-1 flex items-center">
            <p className="text-gray-700 leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          {/* Right Block */}
          <div className="order-1 md:order-2">
            <div className="placeholder-image h-64 mb-6 rounded-lg">
              <ImageIcon className="text-gray-400 h-20 w-20" />
            </div>
          </div>
        </div>
        
        {/* Third Row */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div className="order-1">
            <div className="placeholder-image h-64 mb-6 rounded-lg">
              <ImageIcon className="text-gray-400 h-20 w-20" />
            </div>
          </div>
          
          {/* Right Block */}
          <div className="order-2 flex items-center">
            <p className="text-gray-700 leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
