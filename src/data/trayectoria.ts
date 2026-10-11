// Trayectoria. Cifras verificables, sin porcentajes inventados.
export interface Hito {
  periodo: string;
  titulo: string;
  subtitulo?: string;
  parrafos: string[];
  cifras?: { valor: string; label: string }[];
}

export const hitos: Hito[] = [
  {
    periodo: '2007-2010',
    titulo: 'Experiencia IT inicial',
    subtitulo: 'Dynos · Intarnet',
    parrafos: [
      'Trabajo en empresas del sector tecnológico. Titulación oficial: ASI (Administración de Sistemas Informáticos), I.E.S. Gran Capitán, Córdoba.',
    ],
  },
  {
    periodo: '2017-2025',
    titulo: 'La Carloteña Asados · Responsable de Logística y Control de Stock',
    subtitulo: 'Industria cárnica (pollo, pavo, cerdo) · La Carlota, Córdoba',
    parrafos: [
      'Gestión de lote de proveedor y lote interno de fábrica con codificación propia (fecha + secuencial: 202607310198), el escenario que SAP modela con Batch Management. Registro simultáneo en unidades y kilos por palet (320 und / 650 kg): el escenario que SAP cubre con Catch Weight. Control de caducidades y rotación por fecha (criterio FEFO), regularización de inventario por recuento periódico. ERP: LIBRA (Edisa).',
      'Participé durante ~2 años en la implantación de LIBRA en planta (recepción, deshuesado, manipulado y producción), poniendo en marcha el registro de pesos en recepción y formando a 40-50 operarios en su uso. Es lo que separa a un usuario de ERP de alguien con criterio funcional real.',
      'Alcance real: gestión de inventario (recepción, lote, regularización). Sin compras ni facturación.',
    ],
    cifras: [
      { valor: '30.000', label: 'kg diarios' },
      { valor: '≈10', label: 'camiones / día' },
      { valor: '4', label: 'personas en el equipo' },
      { valor: '40-50', label: 'operarios formados' },
    ],
  },
  {
    periodo: '2026',
    titulo: 'Formación SAP y certificaciones',
    subtitulo: 'Experis Academy · 270 horas',
    parrafos: [
      'IFCT0097 (ABAP Cloud, 205 h) + IFCT0244 (SAP BTP, 65 h). Cuatro certificaciones SAP Certified Associate obtenidas entre julio y septiembre de 2026. Las tres primeras, en formato System-Based Assessment; la de Fiori, mediante una entrevista con una IA, de pregunta y respuesta.',
    ],
  },
  {
    periodo: 'Ahora',
    titulo: 'Portfolio publicado · búsqueda activa',
    parrafos: [
      'Tres proyectos SAP publicados sobre el mismo hilo funcional: recepción → lote → FEFO → alerta de caducidad. Busco mi primera posición en desarrollo SAP, por cuenta ajena. Con base en Córdoba, cerca de Sevilla y Málaga: remoto, híbrido o presencial, y viajes a cliente cuando haga falta.',
    ],
  },
];
