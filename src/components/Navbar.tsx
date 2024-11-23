import { Menu, X, Home, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Nosotros', href: '#about' },
  ];

  return (
    <nav className="fixed w-full bg-[#1A1A1A] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-[#FF0066]" />
              <span className="text-white text-xl font-bold">3 Agujas</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#FF0066] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.link/x3p7k7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0066] text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-[#ff1a75] transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>Solicitar Presupuesto</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FF0066]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A1A1A]">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white block px-3 py-2 hover:text-[#FF0066] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.link/x3p7k7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0066] text-white block px-3 py-2 rounded-md hover:bg-[#ff1a75] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}