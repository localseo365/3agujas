import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-[#1A1A1A]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.2'
        }}
        role="img"
        aria-label="vaciado de pisos en Barcelona"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Servicios profesionales de
          <span className="text-[#FF0066]"> vaciado de pisos en Barcelona</span>
        </h1>
        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Soluciones expertas de vaciado de pisos en Barcelona y provincia.
          Rápido, eficiente y respetuoso con el medio ambiente.
        </p>
        <div className="flex items-center justify-center text-xl text-[#FF0066] mb-8">
          <Phone className="h-6 w-6 mr-2" aria-hidden="true" />
          <a href="https://wa.link/x3p7k7" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff1a75]">
            936 940 151
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.link/x3p7k7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF0066] hover:bg-[#ff1a75] transition-colors duration-200"
          >
            Presupuesto Gratuito
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#FF0066] text-base font-medium rounded-md text-white hover:bg-[#FF0066] transition-colors duration-200"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
    </div>
  );
}