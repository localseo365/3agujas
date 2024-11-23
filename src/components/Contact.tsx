import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.link/x3p7k7', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solicita tu <span className="text-[#FF0066]">presupuesto gratuito</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Contacta con nosotros hoy para recibir un presupuesto sin compromiso para tu vaciado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#FF0066] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Teléfono</h3>
                <a 
                  href="https://wa.link/x3p7k7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF0066]"
                >
                  936 940 151
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#FF0066] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Correo Electrónico</h3>
                <p className="text-gray-300">info@3agujas.pages.dev</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#FF0066] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Ubicación</h3>
                <a 
                  href="https://maps.app.goo.gl/CsKpPQagDakfRbPNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF0066]"
                >
                  Barcelona, España
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#FF0066]"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#FF0066]"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Tu Teléfono"
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#FF0066]"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Cuéntanos sobre tus necesidades de vaciado"
                rows={4}
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#FF0066]"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF0066] hover:bg-[#ff1a75] transition-colors duration-200"
            >
              Enviar Mensaje
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}