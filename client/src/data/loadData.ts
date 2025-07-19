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
  ingresosActuales?: number;
  recaudacionMultas?: number;
  aporteProyecto?: number;
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
      descripcion: "Hasta 256% más multas. Retorno 49% ROI en 26 meses para municipalidades.",
      icono: "money"
    },
    {
      titulo: "App Municipal Tiempo Real",
      descripcion: "Dashboard web + móvil. Reportes automáticos y analytics de optimización.",
      icono: "monitor"
    }
  ];

  const rankingData: RankingComuna[] = [
    { 
      comuna: "Tierra Amarilla", 
      total: 2560, 
      region: "Atacama", 
      incrementoMultas: 2.56,
      ingresosActuales: 13139549000,
      recaudacionMultas: 97834000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Taltal", 
      total: 2520, 
      region: "Antofagasta", 
      incrementoMultas: 2.52,
      ingresosActuales: 10704736000,
      recaudacionMultas: 99185000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Chañaral", 
      total: 1500, 
      region: "Atacama", 
      incrementoMultas: 1.5,
      ingresosActuales: 7723061000,
      recaudacionMultas: 166295000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Diego de Almagro", 
      total: 840, 
      region: "Atacama", 
      incrementoMultas: 0.84,
      ingresosActuales: 11216035000,
      recaudacionMultas: 296722000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "La Calera", 
      total: 1500, 
      region: "Valparaíso", 
      incrementoMultas: 1.5,
      ingresosActuales: 15906216000,
      recaudacionMultas: 333379000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Caldera", 
      total: 610, 
      region: "Atacama", 
      incrementoMultas: 0.61,
      ingresosActuales: 16392141000,
      recaudacionMultas: 408180000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "La Ligua", 
      total: 520, 
      region: "Valparaíso", 
      incrementoMultas: 0.52,
      ingresosActuales: 14647985000,
      recaudacionMultas: 484787000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Sierra Gorda", 
      total: 480, 
      region: "Antofagasta", 
      incrementoMultas: 0.48,
      ingresosActuales: 17420151000,
      recaudacionMultas: 518156000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Copiapó", 
      total: 310, 
      region: "Atacama", 
      incrementoMultas: 0.31,
      ingresosActuales: 55376613000,
      recaudacionMultas: 794565000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "La Serena", 
      total: 140, 
      region: "Coquimbo", 
      incrementoMultas: 0.28,
      ingresosActuales: 108770618000,
      recaudacionMultas: 1770788000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Coquimbo", 
      total: 110, 
      region: "Coquimbo", 
      incrementoMultas: 0.22,
      ingresosActuales: 90283274000,
      recaudacionMultas: 2281154000,
      aporteProyecto: 250000000
    },
    { 
      comuna: "Iquique", 
      total: 80, 
      region: "Tarapacá", 
      incrementoMultas: 0.08,
      ingresosActuales: 100472352000,
      recaudacionMultas: 3165279000,
      aporteProyecto: 250000000
    }
  ];

  const indicadoresData: Indicador[] = [
    { label: "Inversión Inicial", value: 2053, formato: "MM" },
    { label: "Retorno Total", value: 3053, formato: "MM" },
    { label: "ROI", value: 49, formato: "%" },
    { label: "IRR Anual", value: 20.1, formato: "%" },
    { label: "Payback", value: 26, formato: "meses" },
    { label: "Cruces Año 3", value: 70, formato: "unidades" },
    { label: "Valor Multa", value: 100900, formato: "CLP" },
    { label: "Margen Operativo", value: 70, formato: "%" },
    { label: "Infracciones/día", value: 8, formato: "por cruce" },
    { label: "Eficiencia IA", value: 95, formato: "%" }
  ];

  const metricasFinancieras: MetricasFinancieras = {
    inversionInicial: 2053200000,
    retornoTotal: 3053200000,
    gananciaNeta: 1000000000,
    roi: 0.49,
    irrAnual: 0.201,
    paybackMeses: 26,
    margenProfit: 0.70
  };

  const proyeccionesAnuales: ProyeccionAnual[] = [
    {
      año: 1,
      cruces: 20,
      multasDiarias: 16144000,
      multasMensuales: 484320000,
      ventaAnual: 5811840000,
      utilidadInvenor: 288926400,
      utilidadMunicipalidades: 123825600
    },
    {
      año: 2,
      cruces: 30,
      multasDiarias: 24216000,
      multasMensuales: 726480000,
      ventaAnual: 8717760000,
      utilidadInvenor: 655536000,
      utilidadMunicipalidades: 280944000
    },
    {
      año: 3,
      cruces: 70,
      multasDiarias: 56504000,
      multasMensuales: 1695120000,
      ventaAnual: 20341440000,
      utilidadInvenor: 7703645600,
      utilidadMunicipalidades: 3301562400
    },
    {
      año: 4,
      cruces: 150,
      multasDiarias: 121080000,
      multasMensuales: 3632400000,
      ventaAnual: 43588800000,
      utilidadInvenor: 19476072000,
      utilidadMunicipalidades: 8346888000
    },
    {
      año: 5,
      cruces: 300,
      multasDiarias: 363240000,
      multasMensuales: 10897200000,
      ventaAnual: 130766400000,
      utilidadInvenor: 61353096000,
      utilidadMunicipalidades: 26294184000
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