import React from 'react';
import { TrendingUp, Calendar, DollarSign, BarChart3 } from 'lucide-react';

const CashflowSection = () => {
  // Datos del cashflow basados directamente en Excel V5 - Hoja Cashflow
  const monthlyData = [
    { month: 'Mes 1', ingresos: 0, gastos: -406.1, neto: -406.1, acumulado: -406.1, pagoInv: 0 },
    { month: 'Mes 2', ingresos: 0, gastos: -406.1, neto: -406.1, acumulado: -812.2, pagoInv: 0 },
    { month: 'Mes 3', ingresos: 0, gastos: -124.1, neto: -124.1, acumulado: -936.3, pagoInv: 0 },
    { month: 'Mes 4', ingresos: 0, gastos: -124.1, neto: -124.1, acumulado: -1060.4, pagoInv: 0 },
    { month: 'Mes 5', ingresos: 0, gastos: -124.1, neto: -124.1, acumulado: -1184.5, pagoInv: 0 },
    { month: 'Mes 6', ingresos: 48.4, gastos: -124.1, neto: -75.7, acumulado: -1260.2, pagoInv: 0 },
    { month: 'Mes 7', ingresos: 48.4, gastos: -124.1, neto: -75.7, acumulado: -1335.9, pagoInv: 0 },
    { month: 'Mes 8', ingresos: 48.4, gastos: -124.1, neto: -75.7, acumulado: -1411.6, pagoInv: 0 },
    { month: 'Mes 9', ingresos: 96.9, gastos: -124.1, neto: -27.2, acumulado: -1468.8, pagoInv: 30 },
    { month: 'Mes 10', ingresos: 96.9, gastos: -124.1, neto: -27.2, acumulado: -1526.0, pagoInv: 30 },
    { month: 'Mes 11', ingresos: 96.9, gastos: -124.1, neto: -27.2, acumulado: -1583.2, pagoInv: 30 },
    { month: 'Mes 12', ingresos: 96.9, gastos: -124.1, neto: -27.2, acumulado: -1640.4, pagoInv: 30 },
    { month: 'Mes 13', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1554.0, pagoInv: 80 },
    { month: 'Mes 14', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1467.5, pagoInv: 80 },
    { month: 'Mes 15', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1381.0, pagoInv: 80 },
    { month: 'Mes 16', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1294.5, pagoInv: 80 },
    { month: 'Mes 17', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1218.0, pagoInv: 90 },
    { month: 'Mes 18', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1141.5, pagoInv: 90 },
    { month: 'Mes 19', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -1065.0, pagoInv: 90 },
    { month: 'Mes 20', ingresos: 290.6, gastos: -124.1, neto: 166.5, acumulado: -988.5, pagoInv: 90 },
    { month: 'Mes 21', ingresos: 508.5, gastos: -124.1, neto: 384.4, acumulado: -904.1, pagoInv: 300 },
    { month: 'Mes 22', ingresos: 508.5, gastos: -124.1, neto: 384.4, acumulado: -819.6, pagoInv: 300 },
    { month: 'Mes 23', ingresos: 508.5, gastos: -124.1, neto: 384.4, acumulado: -735.2, pagoInv: 300 },
    { month: 'Mes 24', ingresos: 508.5, gastos: -124.1, neto: 384.4, acumulado: -704.0, pagoInv: 353.2 },
    { month: 'Mes 25', ingresos: 0, gastos: 0, neto: 0, acumulado: -704.0, pagoInv: 0 },
    { month: 'Mes 26', ingresos: 0, gastos: 0, neto: 0, acumulado: -704.0, pagoInv: 1000 }
  ];

  // Métricas clave del proyecto (según Excel V5 - datos reales)
  const firstYearMetrics = {
    totalIngresos: 3053.2, // Total pago inversionista
    totalGastos: -2053.2, // Inversión inicial
    netoAnual: 1000, // Ganancia neta inversionista
    breakEven: 13, // mes 13 - primer flujo positivo
    roiAnual: 49, // ROI real del proyecto
    paybackInversionista: 26 // mes 26 - pago final al inversionista
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
            Análisis mes a mes del flujo de caja proyectado según Excel V5, mostrando el primer flujo positivo 
            en el mes 13 y pago final al inversionista en mes 26.
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
            <div className="text-sm text-emerald-400">Primer flujo positivo</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-slate-400 text-sm font-medium">Ingresos Año 1</span>
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(firstYearMetrics.totalIngresos * 1000)}</div>
            <div className="text-sm text-blue-400">+{firstYearMetrics.roiAnual}% ROI</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-slate-400 text-sm font-medium">Flujo Neto Año 1</span>
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(firstYearMetrics.netoAnual * 1000)}</div>
            <div className="text-sm text-purple-400">70% Margen Neto</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span className="text-slate-400 text-sm font-medium">Payback Period</span>
            </div>
            <div className="text-2xl font-bold text-white">{firstYearMetrics.paybackInversionista} meses</div>
            <div className="text-sm text-orange-400">Pago total inversionista</div>
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
