// Certificaciones SAP — fuente: Brief §4.
export interface Certificacion {
  codigo: string;
  nombre: string;
  anio: string;
  // Opcional: la cuarta (Fiori) todavía no tiene proyecto propio publicado.
  proyecto?: { etiqueta: string; ancla: string };
}

export const certificaciones: Certificacion[] = [
  {
    codigo: 'C_ABAPD',
    nombre: 'SAP Certified Associate — Back-End Developer, ABAP Cloud',
    anio: '2026',
    proyecto: { etiqueta: 'P1 · zgr-goods-receipt', ancla: '#p1' },
  },
  {
    codigo: 'C_CPE',
    nombre: 'SAP Certified Associate — Backend Developer, SAP Cloud Application Programming Model',
    anio: '2026',
    proyecto: { etiqueta: 'P2 · cap-lot-traceability', ancla: '#p2' },
  },
  {
    codigo: 'C_CPI',
    nombre: 'SAP Certified Associate — Integration Developer',
    anio: '2026',
    proyecto: { etiqueta: 'P3 · cpi-expiry-alerts', ancla: '#p3' },
  },
  {
    codigo: 'C_FIORD',
    nombre: 'SAP Certified Associate — Fiori Application Developer',
    anio: '2026',
  },
];

export const certificacionesFormato =
  'Las tres primeras en formato System-Based Assessment: no son tipo test, se resuelven ejecutando tareas en un sistema SAP en vivo. SAP retiró la opción múltiple del C_ABAPD en la versión 2601 (2026). La de Fiori usa un formato distinto: una simulación de rol con IA sobre un caso de negocio real.';

export const certificacionesNota =
  'Las tres primeras, cada una con un proyecto publicado detrás. La cuarta, Fiori, se suma sin proyecto propio todavía — construir uno sería la continuación lógica, no una prioridad ahora mismo.';
