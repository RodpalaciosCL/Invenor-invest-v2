import React from 'react';
import { TrendingUp, Calendar, DollarSign, BarChart3 } from 'lucide-react';

const CashflowSection = () => {
  // Datos del cashflow basados en el Excel V5 - Flow Detail (24 meses)
  const monthlyData = [
    { month: 'Ene 24', ingresos: 0, gastos: -180, neto: -180, acumulado: -180 },
    { month: 'Feb 24', ingresos: 0, gastos: -180, neto: -180, acumulado: -360 },
    { month: 'Mar 24', ingresos: 0, gastos: -200, neto: -200, acumulado: -560 },
    { month: 'Abr 24', ingresos: 0, gastos: -200, neto: -200, acumulado: -760 },
    { month: 'May 24', ingresos: 0, gastos: -220, neto: -220, acumulado: -980 },
    { month: 'Jun 24', ingresos: 150, gastos: -220, neto: -70, acumulado: -1050 },
    { month: 'Jul 24', ingresos: 300, gastos: -240, neto: 60, acumulado: -990 },
    { month: 'Ago 24', ingresos: 450, gastos: -240, neto: 210, acumulado: -780 },
    { month: 'Sep 24', ingresos: 600, gastos: -260, neto: 340, acumulado: -440 },
    { month: 'Oct 24', ingresos: 750, gastos: -260, neto: 490, acumulado: 50 },
    { month: 'Nov 24', ingresos: 900, gastos: -280, neto: 620, acumulado: 670 },
    { month: 'Dic 24', ingresos: 1050, gastos: -280, neto: 770, acumulado: 1440 },
    { month: 'Ene 25', ingresos: 1200, gastos: -300, neto: 900, acumulado: 2340 },
    { month: 'Feb 25', ingresos: 1350, gastos: -300, neto: 1050, acumulado: 3390 },
    { month: 'Mar 25', ingresos: 1500, gastos: -320, neto: 1180, acumulado: 4570 },
    { month: 'Abr 25', ingresos: 1650, gastos: -320, neto: 1330, acumulado: 5900 },
    { month: 'May 25', ingresos: 1800, gastos: -340, neto: 1460, acumulado: 7360 },
    { month: 'Jun 25', ingresos: 1950, gastos: -340, neto: 1610, acumulado: 8970 },
    { month: 'Jul 25', ingresos: 2100, gastos: -360, neto: 1740, acumulado: 10710 },
    { month: 'Ago 25', ingresos: 2250, gastos: -360, neto: 1890, acumulado: 12600 },
    { month: 'Sep 25', ingresos: 2400, gastos: -380, neto: 2020, acumulado: 14620 },
    { month: 'Oct 25', ingresos: 2550, gastos: -380, neto: 2170, acumulado: 16790 },
    { month: 'Nov 25', ingresos: 2700, gastos: -400, neto: 2300, acumulado: 19090 },
    { month: 'Dic 25', ingresos: 2850, gastos: -400, neto: 2450, acumulado: 21540 }
  ];

  // Métricas clave del primer año
  const firstYearMetrics = {
    totalIngresos: 9000,
    totalGastos: -2940,
    netoAnual: 6060,
    breakEven: 10, // mes 10 (Octubre 2024)
    roiAnual: 206
  };

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value.toFixed(0)}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Flujo de Caja Detallado</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Cashflow Proyectado 24 Meses
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Análisis mes a mes del flujo de caja proyectado, mostrando el camino hacia la rentabilidad 
            y el punto de equilibrio en el mes 10.
          </p>
        </div>

        {/* Métricas Clave */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-400 text-sm font-medium">Break Even</span>
            </div>
            <div className="text-2xl font-bold text-white">Mes {firstYearMetrics.breakEven}</div>
            <div className="text-sm text-emerald-400">Octubre 2024</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-slate-400 text-sm font-medium">Ingresos Año 1</span>
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(firstYearMetrics.totalIngresos * 1000)}</div>
            <div className="text-sm text-blue-400">+206% ROI</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-slate-400 text-sm font-medium">Flujo Neto Año 1</span>
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(firstYearMetrics.netoAnual * 1000)}</div>
            <div className="text-sm text-purple-400">67% Margen Neto</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span className="text-slate-400 text-sm font-medium">Payback Period</span>
            </div>
            <div className="text-2xl font-bold text-white">10 meses</div>
            <div className="text-sm text-orange-400">Recuperación rápida</div>
          </div>
        </div>

        {/* Tabla de Cashflow */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-2">Flujo de Caja Mensual (Miles USD)</h3>
            <p className="text-slate-400">Detalle mes a mes de ingresos, gastos y flujo neto acumulado</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="text-left py-4 px-6 text-slate-300 font-medium">Mes</th>
                  <th className="text-right py-4 px-6 text-slate-300 font-medium">Ingresos</th>
                  <th className="text-right py-4 px-6 text-slate-300 font-medium">Gastos</th>
                  <th className="text-right py-4 px-6 text-slate-300 font-medium">Flujo Neto</th>
                  <th className="text-right py-4 px-6 text-slate-300 font-medium">Acumulado</th>
                  <th className="text-center py-4 px-6 text-slate-300 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-800/20">
                    <td className="py-4 px-6 text-white font-medium">{data.month}</td>
                    <td className="py-4 px-6 text-right text-emerald-400 font-medium">
                      {data.ingresos > 0 ? formatCurrency(data.ingresos * 1000) : '-'}
                    </td>
                    <td className="py-4 px-6 text-right text-red-400 font-medium">
                      {formatCurrency(data.gastos * 1000)}
                    </td>
                    <td className={`py-4 px-6 text-right font-medium ${
                      data.neto >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {formatCurrency(data.neto * 1000)}
                    </td>
                    <td className={`py-4 px-6 text-right font-medium ${
                      data.acumulado >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {formatCurrency(data.acumulado * 1000)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {data.acumulado >= 0 ? (
                        <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          Positivo
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          Inversión
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gráfico Visual Simple */}
        <div className="mt-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Evolución del Flujo Acumulado</h4>
          <div className="h-32 flex items-end justify-between gap-1">
            {monthlyData.map((data, index) => {
              const maxValue = Math.max(...monthlyData.map(d => Math.abs(d.acumulado)));
              const height = (Math.abs(data.acumulado) / maxValue) * 100;
              const isPositive = data.acumulado >= 0;
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className={`w-full rounded-t ${
                      isPositive ? 'bg-emerald-500' : 'bg-red-500'
                    } transition-all duration-300 hover:opacity-80`}
                    style={{ height: `${height}%` }}
                    title={`${data.month}: ${formatCurrency(data.acumulado * 1000)}`}
                  />
                  {index % 3 === 0 && (
                    <span className="text-xs text-slate-400 mt-2 transform -rotate-45">
                      {data.month.split(' ')[0]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-sm text-slate-300">Fase de Inversión</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-sm text-slate-300">Generación de Valor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashflowSection;
