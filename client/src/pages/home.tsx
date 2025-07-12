import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-gray-900">Mi Sitio Web</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Inicio</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Acerca</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contacto</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Bienvenido a tu sitio web
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Esta es la estructura base de tu sitio web. Está lista para que agregues el contenido y funcionalidades que necesites.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Comenzar
            </Button>
            <Button variant="outline" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              Saber más
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Característica 1</h3>
            <p className="text-gray-600">Descripción de la característica que agregues aquí.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Característica 2</h3>
            <p className="text-gray-600">Descripción de la característica que agregues aquí.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Característica 3</h3>
            <p className="text-gray-600">Descripción de la característica que agregues aquí.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
