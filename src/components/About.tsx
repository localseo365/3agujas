import { Award, Clock, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Profesionalidad',
    description: 'Equipo altamente cualificado con años de experiencia en el sector del vaciado de inmuebles.'
  },
  {
    icon: Clock,
    title: 'Rapidez',
    description: 'Nos comprometemos a realizar los trabajos en el menor tiempo posible sin sacrificar la calidad.'
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Dedicación total a la satisfacción del cliente y atención personalizada en cada proyecto.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quiénes <span className="text-[#FF0066]">somos</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            3 Agujas nace de la necesidad de ofrecer un servicio profesional y eficiente 
            en el sector del vaciado de pisos en Barcelona. Con años de experiencia, 
            nos hemos convertido en referentes del sector gracias a nuestro compromiso 
            con la calidad y la satisfacción del cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-black/50 p-8 rounded-lg text-center hover:transform hover:-translate-y-1 transition-all duration-200"
            >
              <value.icon className="h-12 w-12 text-[#FF0066] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.link/x3p7k7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF0066] hover:bg-[#ff1a75] transition-colors duration-200"
          >
            Contacta con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}