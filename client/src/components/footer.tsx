export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Address */}
          <div className="mb-4 md:mb-0">
            <p className="text-white font-opensans">
              123 Main St, #2222, City/State, California 44555
            </p>
          </div>
          
          {/* Footer Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">
              Links
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">
              Termos de Serviço
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
