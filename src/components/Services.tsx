import { Package2, Recycle, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Package2,
    title: 'Vaciado Completo',
    description: 'Servicios integrales de vaciado para viviendas, oficinas y espacios comerciales.'
  },
  {
    icon: Recycle,
    title: 'Gestión Ecológica',
    description: 'Eliminación y reciclaje responsable siguiendo las normativas medioambientales.'
  },
  {
    icon: Clock,
    title: 'Servicio Rápido',
    description: 'Finalización del servicio en 24-48 horas para la mayoría de los inmuebles.'
  },
  {
    icon: Shield,
    title: 'Servicio Asegurado',
    description: 'Servicio completamente asegurado con manipulación profesional de objetos de valor.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1A1A1A]" aria-label="Nuestros servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-[#FF0066]">servicios de vaciado</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Servicios profesionales de vaciado adaptados a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/50 p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-200"
            >
              <service.icon className="h-12 w-12 text-[#FF0066] mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}