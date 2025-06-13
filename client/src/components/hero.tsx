export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      {/* Stadium background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-left px-4 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6 leading-tight">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="text-base md:text-lg text-white font-opensans leading-relaxed opacity-90 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
