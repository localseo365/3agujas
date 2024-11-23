import { MapPin } from 'lucide-react';

const areas = [
  {
    city: 'Barcelona',
    services: ['Vaciado de pisos', 'Vaciado de locales', 'Vaciado de oficinas'],
    description: 'Servicio integral de vaciado en toda Barcelona ciudad'
  },
  {
    city: 'Hospitalet de Llobregat',
    services: ['Vaciado de pisos', 'Vaciado de naves', 'Limpieza de locales'],
    description: 'Especialistas en vaciado de inmuebles en L\'Hospitalet'
  },
  {
    city: 'Badalona',
    services: ['Vaciado de locales', 'Vaciado de pisos', 'Vaciado de trasteros'],
    description: 'Servicios rápidos de vaciado en toda Badalona'
  },
  {
    city: 'Santa Coloma',
    services: ['Vaciado de pisos', 'Vaciado de oficinas', 'Vaciado urgente'],
    description: 'Vaciados profesionales en Santa Coloma de Gramenet'
  }
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Áreas de <span className="text-[#FF0066]">servicio</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cobertura completa en Barcelona y área metropolitana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-[#FF0066] mr-2" />
                <h3 className="text-xl font-semibold text-white">{area.city}</h3>
              </div>
              <p className="text-gray-300 mb-4">{area.description}</p>
              <ul className="space-y-2">
                {area.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-gray-400 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FF0066] rounded-full mr-2"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.link/x3p7k7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF0066] hover:bg-[#ff1a75] transition-colors duration-200"
          >
            Consulta tu zona
          </a>
        </div>
      </div>
    </section>
  );
}