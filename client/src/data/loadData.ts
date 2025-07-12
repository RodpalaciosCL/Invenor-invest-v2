// Simulando datos que vendrían del Excel PROYECTO_CRUCES_AI_V3.xlsx
export interface CasoUso {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface RankingComuna {
  comuna: string;
  total: number;
}

export interface Indicador {
  label: string;
  value: number;
}

export function loadProjectData() {
  const casosData: CasoUso[] = [
    {
      titulo: "Cruce Detectado",
      descripcion: "Detección automática de infracciones viales en cruces ferroviarios.",
      icono: "detection"
    },
    {
      titulo: "Validación Jurídica", 
      descripcion: "Evidencia legal trazada y auditada para soporte de multas.",
      icono: "legal"
    },
    {
      titulo: "Recaudación Municipal",
      descripcion: "Ingresos complementarios para municipios: M$ 2.539 en Sierra Gorda.",
      icono: "money"
    },
    {
      titulo: "Monitoreo en Tiempo Real",
      descripcion: "Sistema 24/7 de supervisión de cruces ferroviarios críticos.",
      icono: "monitor"
    }
  ];

  const rankingData: RankingComuna[] = [
    { comuna: "La Serena", total: 3165 },
    { comuna: "Coquimbo", total: 2281 },
    { comuna: "Iquique", total: 1770 },
    { comuna: "Zapallar", total: 551 },
    { comuna: "Caldera", total: 408 },
    { comuna: "Sierra Gorda", total: 2539 },
    { comuna: "Antofagasta", total: 1892 },
    { comuna: "Valparaíso", total: 1456 }
  ];

  const indicadoresData: Indicador[] = [
    { label: "Inversión Total (M$)", value: 495 },
    { label: "Utilidad Proyectada (M$)", value: 1305 },
    { label: "Comunas Impactadas", value: 12 },
    { label: "Red Cubierta (km)", value: 1200 },
    { label: "Cruces Monitoreados", value: 78 },
    { label: "Detecciones/Mes", value: 2340 }
  ];

  return { casosData, rankingData, indicadoresData };
}