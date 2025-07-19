import React from 'react';
import { Globe, MapPin, TrendingUp, Users } from 'lucide-react';

const InternationalExpansion = () => {
  const expansionPhases = [
    {
      phase: "Fase 1: Consolidación Nacional",
      timeframe: "Años 1-2",
      markets: ["Chile"],
      description: "Establecimiento sólido en el mercado chileno con 15 comunas priorizadas",
      milestones: [
        "Implementación en 15 comunas objetivo",
        "Validación del modelo de negocio",
        "Generación de casos de éxito comprobables"
      ]
    },
    {
      phase: "Fase 2: Expansión Regional",
      timeframe: "Años 3-4",
      markets: ["Perú", "Colombia", "Ecuador"],
      description: "Expansión a mercados latinoamericanos con características similares",
      milestones: [
        "Adaptación del modelo a regulaciones locales",
        "Alianzas estratégicas con gobiernos locales",
        "Implementación piloto en 3 ciudades por país"
      ]
    },
    {
      phase: "Fase 3: Escalamiento Global",
      timeframe: "Años 5-7",
      markets: ["México", "Brasil", "Argentina", "España"],
      description: "Entrada a mercados de mayor escala con potencial de crecimiento exponencial",
      milestones: [
        "Establecimiento de oficinas regionales",
        "Desarrollo de plataforma multiidioma",
        "Captación de inversionistas internacionales"
      ]
    }
  ];

  const marketOpportunities = [
    {
      country: "Perú",
      population: "33M habitantes",
      municipalities: "1,874 distritos",
      opportunity: "Programa de modernización municipal activo",
      marketSize: "$2.1B USD"
    },
    {
      country: "Colombia",
      population: "51M habitantes", 
      municipalities: "1,102 municipios",
      opportunity: "Inversión en transformación digital pública",
      marketSize: "$3.8B USD"
    },
    {
      country: "México",
      population: "128M habitantes",
      municipalities: "2,469 municipios",
      opportunity: "Programa Nacional de Gobierno Digital",
      marketSize: "$12.4B USD"
    },
    {
      country: "Brasil",
      population: "215M habitantes",
      municipalities: "5,570 municipios",
      opportunity: "Lei Geral de Proteção de Dados impulsa modernización",
      marketSize: "$18.7B USD"
    }
  ];

  const competitiveAdvantages = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Modelo Probado",
      description: "Casos de éxito validados en Chile facilitan replicación"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Equipo Multicultural",
      description: "Experiencia internacional en implementación de soluciones públicas"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "Tecnología Escalable",
      description: "Plataforma diseñada para múltiples jurisdicciones y idiomas"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Network Estratégico",
      description: "Red de contactos gubernamentales y empresariales en LATAM"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expansión Internacional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estrategia de crecimiento hacia mercados latinoamericanos con un potencial 
            de mercado combinado de más de $37B USD
          </p>
        </div>

        {/* Fases de Expansión */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Roadmap de Expansión
          </h3>
          <div className="space-y-8">
            {expansionPhases.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                    <p className="text-blue-600 font-semibold">{phase.timeframe}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {phase.markets.map((market, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{phase.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {phase.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Oportunidades de Mercado */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Oportunidades de Mercado Objetivo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketOpportunities.map((market, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{market.country}</h4>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600"><span className="font-semibold">Población:</span> {market.population}</p>
                  <p className="text-gray-600"><span className="font-semibold">Municipios:</span> {market.municipalities}</p>
                  <p className="text-green-600 font-bold">{market.marketSize}</p>
                </div>
                <p className="text-gray-700 text-sm">{market.opportunity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ventajas Competitivas */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ventajas Competitivas Internacionales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proyección de Ingresos Internacionales */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Proyección de Ingresos por Expansión
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Año 3-4</h4>
              <p className="text-3xl font-bold text-blue-600">$8.5M USD</p>
              <p className="text-gray-600">Expansión Regional</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Año 5-7</h4>
              <p className="text-3xl font-bold text-green-600">$32.1M USD</p>
              <p className="text-gray-600">Escalamiento Global</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Potencial Total</h4>
              <p className="text-3xl font-bold text-purple-600">$37B USD</p>
              <p className="text-gray-600">Mercado Direccionable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalExpansion;
