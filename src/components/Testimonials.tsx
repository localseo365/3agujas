import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "María Garriga",
    position: "Propietaria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200",
    text: "Excelente servicio de vaciado. El equipo fue muy profesional y eficiente. Terminaron el trabajo en menos tiempo del esperado y dejaron todo impecable.",
    rating: 5
  },
  {
    name: "Carles Roig",
    position: "Administrador de Fincas",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200",
    text: "Llevamos trabajando con 3 Agujas más de un año y siempre responden con rapidez y profesionalidad. Son mi primera opción para vaciados de pisos.",
    rating: 5
  },
  {
    name: "Anna Marull",
    position: "Agente Inmobiliario",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200",
    text: "Un servicio excepcional. Me impresionó su atención al detalle y su compromiso con el reciclaje. Totalmente recomendables.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Opiniones de <span className="text-[#FF0066]">clientes</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestro servicio
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-black/50 p-8 rounded-lg relative">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-[#FF0066] opacity-20" />
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-white font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-[#FF0066] fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-[#FF0066]' : 'bg-gray-600'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}