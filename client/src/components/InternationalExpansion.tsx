import React from 'react';

const InternationalExpansion: React.FC = () => {
  const countries = [
    {
      name: 'Perú',
      flag: '🇵🇪',
      municipalities: 5,
      totalMunicipalities: 1874,
      population: '33M',
      targetYear: 2027,
      phase: 'Fase 2',
      marketSize: '2,100',
      potentialRevenue: '420',
      status: 'En preparación',
      targetCities: ['Miraflores', 'San Isidro', 'Surco', 'San Borja', 'La Victoria']
    },
    {
      name: 'Colombia',
      flag: '🇨🇴',
      municipalities: 5,
      totalMunicipalities: 1103,
      population: '51M',
      targetYear: 2028,
      phase: 'Fase 3',
      marketSize: '3,200',
      potentialRevenue: '640',
      status: 'Análisis inicial',
      targetCities: ['Chapinero', 'Usaquén', 'Kennedy', 'Suba', 'Engativá']
    },
    {
      name: 'México',
      flag: '🇲🇽',
      municipalities: 5,
      totalMunicipalities: 2469,
      population: '128M',
      targetYear: 2029,
      phase: 'Fase 4',
      marketSize: '8,100',
      potentialRevenue: '1,620',
      status: 'Evaluación',
      targetCities: ['Benito Juárez', 'Miguel Hidalgo', 'Cuauhtémoc', 'Iztapalapa', 'Naucalpan']
    }
  ];

  const totalPotentialRevenue = countries.reduce((sum, country) => sum + parseInt(country.potentialRevenue), 0);

  return (
    <div className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              EXPANSIÓN INTERNACIONAL
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
            Plan estratégico de crecimiento regional con potencial de ingresos adicionales de{' '}
            <span className="text-orange-400 font-bold">US$ {totalPotentialRevenue.toLocaleString()}M</span> anuales
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="mb-16">
          <div className="bg-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">
              CRONOGRAMA DE EXPANSIÓN 2025-2029
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-4 h-4 mx-auto mb-2"></div>
                <p className="text-sm text-zinc-400">2025-2026</p>
                <p className="font-semibold">Chile</p>
                <p className="text-xs text-zinc-500">346 comunas</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 rounded-full w-4 h-4 mx-auto mb-2"></div>
                <p className="text-sm text-zinc-400">2027</p>
                <p className="font-semibold">Perú</p>
                <p className="text-xs text-zinc-500">5 municipios target</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 rounded-full w-4 h-4 mx-auto mb-2"></div>
                <p className="text-sm text-zinc-400">2028</p>
                <p className="font-semibold">Colombia</p>
                <p className="text-xs text-zinc-500">5 municipios target</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 rounded-full w-4 h-4 mx-auto mb-2"></div>
                <p className="text-sm text-zinc-400">2029</p>
                <p className="font-semibold">México</p>
                <p className="text-xs text-zinc-500">5 municipios target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {countries.map((country, index) => (
            <div key={index} className="bg-zinc-800 rounded-2xl p-8 hover:bg-zinc-750 transition-colors">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{country.flag}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                <div className="inline-block px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-semibold">
                  {country.phase}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Municipios fase inicial:</span>
                  <span className="font-bold text-orange-400">{country.municipalities}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-zinc-400 text-sm block mb-2">Ciudades objetivo:</span>
                  <div className="flex flex-wrap gap-1">
                    {country.targetCities.map((city, i) => (
                      <span key={i} className="bg-zinc-700 text-xs px-2 py-1 rounded text-zinc-300">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Población:</span>
                  <span className="font-bold">{country.population}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Año objetivo:</span>
                  <span className="font-bold text-green-400">{country.targetYear}</span>
                </div>
                
                <div className="border-t border-zinc-700 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-400">Tamaño mercado:</span>
                    <span className="font-bold">US$ {country.marketSize}M</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-400">Ingresos potenciales:</span>
                    <span className="font-bold text-orange-400">US$ {country.potentialRevenue}M</span>
                  </div>
                  
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      country.status === 'En preparación' ? 'bg-orange-600 text-white' :
                      country.status === 'Análisis inicial' ? 'bg-blue-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {country.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Penetration Strategy */}
        <div className="bg-zinc-800 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-orange-400">
            ESTRATEGIA DE PENETRACIÓN DE MERCADO
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Entrada Estratégica</h4>
              <p className="text-zinc-400 text-sm">
                Foco inicial en municipios de mayor tamaño y capacidad tecnológica, replicando el modelo exitoso de Chile
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Alianzas Locales</h4>
              <p className="text-zinc-400 text-sm">
                Partnerships con gobiernos centrales, asociaciones municipales y empresas tecnológicas regionales
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Escalamiento Rápido</h4>
              <p className="text-zinc-400 text-sm">
                Implementación acelerada aprovechando la experiencia y tecnología ya desarrollada en Chile
              </p>
            </div>
          </div>
        </div>

        {/* Total Impact Summary */}
        <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-600/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">IMPACTO TOTAL PROYECTADO AL 2029</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">
                27
              </div>
              <div className="text-sm text-zinc-400">Total Municipios Fase 1</div>
              <div className="text-xs text-zinc-500">12 Chile + 15 Internacional</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">212M+</div>
              <div className="text-sm text-zinc-400">Población Total</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">
                US$ {(13400 + countries.reduce((sum, c) => sum + parseInt(c.marketSize), 0)).toLocaleString()}M
              </div>
              <div className="text-sm text-zinc-400">Tamaño Total Mercado</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">
                US$ {(2680 + totalPotentialRevenue).toLocaleString()}M
              </div>
              <div className="text-sm text-zinc-400">Ingresos Potenciales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalExpansion;
