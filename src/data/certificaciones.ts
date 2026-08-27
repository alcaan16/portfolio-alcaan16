// Certificaciones SAP — fuente: Brief §4.
export interface Certificacion {
  codigo: string;
  nombre: string;
  anio: string;
  proyecto: { etiqueta: string; ancla: string };
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
];

export const certificacionesNota =
  'Las tres en formato System-Based Assessment: no son tipo test, se resuelven ejecutando tareas en un sistema SAP en vivo. SAP retiró la opción múltiple del C_ABAPD en la versión 2601 (2026). Cada certificación tiene un proyecto publicado detrás.';
