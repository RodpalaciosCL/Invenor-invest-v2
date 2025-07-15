// Dataset completo CRUCES AI para pitch deck INVENOR
export interface CasoUso {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface RankingComuna {
  comuna: string;
  total: number;
  region: string;
  incrementoMultas: number;
}

export interface Indicador {
  label: string;
  value: number;
  formato?: string;
}

export interface MetricasFinancieras {
  inversionInicial: number;
  retornoTotal: number;
  gananciaNeta: number;
  roi: number;
  irrAnual: number;
  paybackMeses: number;
  margenProfit: number;
}

export interface ProyeccionAnual {
  año: number;
  cruces: number;
  multasDiarias: number;
  multasMensuales: number;
  ventaAnual: number;
  utilidadInvenor?: number;
  utilidadMunicipalidades?: number;
}

export function loadProjectData() {
  // Datos reales del proyecto CRUCES AI
  const casosData: CasoUso[] = [
    {
      titulo: "Detección Automática IA",
      descripcion: "95% eficiencia vs 8% actual. Reconocimiento de patentes y clasificación automática de infracciones 24/7.",
      icono: "detection"
    },
    {
      titulo: "Evidencia Legal Trazada", 
      descripcion: "Video + metadata con hash criptográfico. 100% validez jurídica para multas municipales.",
      icono: "legal"
    },
    {
      titulo: "Incremento Recaudación",
      descripcion: "Hasta 256% más multas. Retorno 55% ROI en 24 meses para municipalidades.",
      icono: "money"
    },
    {
      titulo: "App Municipal Tiempo Real",
      descripcion: "Dashboard web + móvil. Reportes automáticos y analytics de optimización.",
      icono: "monitor"
    }
  ];

  const rankingData: RankingComuna[] = [
    { comuna: "Tierra Amarilla", total: 2560, region: "Atacama", incrementoMultas: 2.56 },
    { comuna: "Taltal", total: 2520, region: "Antofagasta", incrementoMultas: 2.52 },
    { comuna: "Chañaral", total: 1500, region: "Atacama", incrementoMultas: 1.5 },
    { comuna: "Diego de Almagro", total: 840, region: "Atacama", incrementoMultas: 0.84 },
    { comuna: "La Calera", total: 750, region: "Valparaíso", incrementoMultas: 0.75 },
    { comuna: "Caldera", total: 610, region: "Atacama", incrementoMultas: 0.61 },
    { comuna: "La Ligua", total: 520, region: "Valparaíso", incrementoMultas: 0.52 },
    { comuna: "Sierra Gorda", total: 480, region: "Antofagasta", incrementoMultas: 0.48 },
    { comuna: "Copiapó", total: 310, region: "Atacama", incrementoMultas: 0.31 },
    { comuna: "La Serena", total: 140, region: "Coquimbo", incrementoMultas: 0.14 },
    { comuna: "Coquimbo", total: 110, region: "Coquimbo", incrementoMultas: 0.11 },
    { comuna: "Iquique", total: 80, region: "Tarapacá", incrementoMultas: 0.08 }
  ];

  const indicadoresData: Indicador[] = [
    { label: "Inversión Inicial", value: 2067.6, formato: "M$" },
    { label: "Retorno Total", value: 3096.2, formato: "M$" },
    { label: "ROI", value: 55, formato: "%" },
    { label: "IRR Anual", value: 42, formato: "%" },
    { label: "Payback", value: 15, formato: "meses" },
    { label: "Cruces Año 3", value: 60, formato: "unidades" },
    { label: "Comunas Objetivo", value: 12, formato: "regiones" },
    { label: "Eficiencia IA", value: 95, formato: "%" }
  ];

  const metricasFinancieras: MetricasFinancieras = {
    inversionInicial: 2067600000,
    retornoTotal: 3096177500,
    gananciaNeta: 1136193777,
    roi: 0.55,
    irrAnual: 0.42,
    paybackMeses: 15,
    margenProfit: 0.49
  };

  const proyeccionesAnuales: ProyeccionAnual[] = [
    {
      año: 1,
      cruces: 25,
      multasDiarias: 25225000,
      multasMensuales: 756750000,
      ventaAnual: 9081000000
    },
    {
      año: 2,
      cruces: 40,
      multasDiarias: 40360000,
      multasMensuales: 1210800000,
      ventaAnual: 14529600000
    },
    {
      año: 2.5,
      cruces: 50,
      multasDiarias: 50450000,
      multasMensuales: 1513500000,
      ventaAnual: 18162000000,
      utilidadInvenor: 650970600,
      utilidadMunicipalidades: 278987400
    },
    {
      año: 3,
      cruces: 60,
      multasDiarias: 60540000,
      multasMensuales: 1816200000,
      ventaAnual: 21794400000,
      utilidadInvenor: 1176637392,
      utilidadMunicipalidades: 504273168
    }
  ];

  return { 
    casosData, 
    rankingData, 
    indicadoresData, 
    metricasFinancieras, 
    proyeccionesAnuales 
  };
}