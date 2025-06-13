export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Address */}
          <div className="mb-6 md:mb-0">
            <p className="text-white font-opensans text-sm leading-relaxed">
              123 Main St, #2222<br />
              City/State, California 44555
            </p>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 text-sm">
              Links
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 text-sm">
              Termos de Serviço
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 text-sm">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
