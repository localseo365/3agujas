import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">3 Agujas</h3>
            <p className="text-gray-300">
              Servicios profesionales de vaciado de pisos en Barcelona y provincia.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="h-4 w-4 text-[#FF0066]" />
              <a 
                href="https://wa.link/x3p7k7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0066]"
              >
                936 940 151
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#FF0066]">Inicio</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#FF0066]">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-[#FF0066]">Portafolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#FF0066]">Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Vaciado Completo</li>
              <li className="text-gray-300">Gestión Ecológica</li>
              <li className="text-gray-300">Servicio Rápido</li>
              <li className="text-gray-300">Servicio Asegurado</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF0066]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF0066]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF0066]">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382792.0706685668!2d1.6452827734374862!3d41.4487018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6656bb3d66fa8bb5%3A0x61b2734c94d2de5f!2sVaciar%20pisos%20Barcelona%203%20Agujas!5e0!3m2!1sca!2ses!4v1732347701523!5m2!1sca!2ses" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de 3 Agujas"
            className="rounded-lg"
          />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} 3 Agujas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}