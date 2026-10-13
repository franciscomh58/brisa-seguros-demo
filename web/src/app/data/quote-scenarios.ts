export type QuoteField = {
  id: string;
  label: string;
  optional?: boolean;
  options: { id: string; label: string }[];
};

export const insuranceFields: Record<string, QuoteField[]> = {
  'auto-individual': [
    {
      id: 'vehicleType',
      label: 'Tipo de auto',
      options: [
        { id: 'compacto', label: 'Compacto' },
        { id: 'sedan', label: 'Sedán' },
        { id: 'suv', label: 'SUV' },
      ],
    },
    {
      id: 'modelYear',
      label: 'Año del vehículo',
      options: [
        { id: '2020', label: '2020' },
        { id: '2023', label: '2023' },
        { id: '2026', label: '2026' },
      ],
    },
    {
      id: 'use',
      label: 'Uso del vehículo',
      options: [
        { id: 'personal', label: 'Personal' },
        { id: 'daily', label: 'Traslados cotidianos' },
      ],
    },
  ],
  'auto-flotilla': [
    {
      id: 'vehicleType',
      label: 'Tipo predominante',
      options: [
        { id: 'cars', label: 'Autos' },
        { id: 'utility', label: 'Utilitarios' },
        { id: 'mixed', label: 'Mixta' },
      ],
    },
    {
      id: 'fleetSize',
      label: 'Tamaño de flotilla',
      options: [
        { id: '3-5', label: '3–5 unidades' },
        { id: '6-10', label: '6–10 unidades' },
        { id: '11-20', label: '11–20 unidades' },
      ],
    },
    {
      id: 'modelYear',
      label: 'Año predominante',
      options: [
        { id: '2020', label: '2020' },
        { id: '2023', label: '2023' },
        { id: '2026', label: '2026' },
      ],
    },
  ],
  'gastos-medicos-individual': [
    {
      id: 'ageRange',
      label: 'Rango de edad ficticio',
      options: [
        { id: '18-29', label: '18–29 años' },
        { id: '30-44', label: '30–44 años' },
        { id: '45-60', label: '45–60 años' },
      ],
    },
    {
      id: 'group',
      label: 'Grupo de ejemplo',
      options: [
        { id: 'one', label: 'Una persona' },
        { id: 'couple', label: 'Pareja' },
        { id: 'family', label: 'Familia' },
      ],
    },
    {
      id: 'activity',
      label: 'Actividad ficticia',
      optional: true,
      options: [
        { id: 'everyday', label: 'Cotidiana' },
        { id: 'active', label: 'Activa' },
        { id: 'omit', label: 'Omitir' },
      ],
    },
  ],
  'gastos-medicos-colectivo': [
    {
      id: 'organization',
      label: 'Tipo de organización',
      options: [
        { id: 'office', label: 'Oficina' },
        { id: 'retail', label: 'Comercio' },
        { id: 'services', label: 'Servicios' },
      ],
    },
    {
      id: 'groupSize',
      label: 'Tamaño del grupo',
      options: [
        { id: '5-20', label: '5–20 integrantes' },
        { id: '21-50', label: '21–50 integrantes' },
        { id: '51-100', label: '51–100 integrantes' },
      ],
    },
    {
      id: 'dependents',
      label: 'Dependientes ficticios',
      options: [
        { id: 'without', label: 'Sin dependientes' },
        { id: 'with', label: 'Con dependientes' },
      ],
    },
  ],
  'vida-hombre-clave': [
    {
      id: 'ageRange',
      label: 'Rango de edad ficticio',
      options: [
        { id: '25-39', label: '25–39 años' },
        { id: '40-54', label: '40–54 años' },
        { id: '55-65', label: '55–65 años' },
      ],
    },
    {
      id: 'role',
      label: 'Rol en el negocio',
      options: [
        { id: 'direction', label: 'Dirección' },
        { id: 'specialist', label: 'Especialista' },
        { id: 'operating-partner', label: 'Socio operativo' },
      ],
    },
    {
      id: 'activity',
      label: 'Actividad ficticia',
      optional: true,
      options: [
        { id: 'everyday', label: 'Cotidiana' },
        { id: 'active', label: 'Activa' },
        { id: 'omit', label: 'Omitir' },
      ],
    },
  ],
  'danos-empresas': [
    {
      id: 'business',
      label: 'Giro de ejemplo',
      options: [
        { id: 'office', label: 'Oficina' },
        { id: 'workshop', label: 'Taller' },
        { id: 'warehouse', label: 'Almacén' },
      ],
    },
    {
      id: 'space',
      label: 'Espacio de trabajo',
      options: [
        { id: 'owned', label: 'Propio' },
        { id: 'rented', label: 'Rentado' },
      ],
    },
    {
      id: 'priority',
      label: 'Prioridad del escenario',
      options: [
        { id: 'equipment', label: 'Equipo' },
        { id: 'inventory', label: 'Inventario' },
        { id: 'both', label: 'Ambos' },
      ],
    },
  ],
  'riesgos-comerciales': [
    {
      id: 'activity',
      label: 'Actividad de ejemplo',
      options: [
        { id: 'store', label: 'Tienda' },
        { id: 'cafe', label: 'Cafetería' },
        { id: 'services', label: 'Servicios' },
      ],
    },
    {
      id: 'premises',
      label: 'Local',
      options: [
        { id: 'owned', label: 'Propio' },
        { id: 'rented', label: 'Rentado' },
      ],
    },
    {
      id: 'priority',
      label: 'Prioridad del escenario',
      options: [
        { id: 'customers', label: 'Atención al público' },
        { id: 'operations', label: 'Operación cotidiana' },
        { id: 'both', label: 'Ambas' },
      ],
    },
  ],
  afinidad: [
    {
      id: 'community',
      label: 'Tipo de comunidad',
      options: [
        { id: 'association', label: 'Asociación' },
        { id: 'company', label: 'Empresa' },
        { id: 'education', label: 'Comunidad educativa' },
      ],
    },
    {
      id: 'groupSize',
      label: 'Tamaño del grupo',
      options: [
        { id: '10-30', label: '10–30 integrantes' },
        { id: '31-100', label: '31–100 integrantes' },
        { id: 'over-100', label: 'Más de 100 integrantes' },
      ],
    },
    {
      id: 'interest',
      label: 'Interés de ejemplo',
      options: [
        { id: 'mobility', label: 'Movilidad' },
        { id: 'home', label: 'Hogar' },
        { id: 'mixed', label: 'Mixto' },
      ],
    },
  ],
  hogar: [
    {
      id: 'housing',
      label: 'Tipo de vivienda',
      options: [
        { id: 'house', label: 'Casa' },
        { id: 'apartment', label: 'Departamento' },
      ],
    },
    {
      id: 'relationship',
      label: 'Relación con la vivienda',
      options: [
        { id: 'owner', label: 'Propietario' },
        { id: 'tenant', label: 'Arrendatario' },
      ],
    },
    {
      id: 'interest',
      label: 'Interés del escenario',
      options: [
        { id: 'contents', label: 'Contenidos' },
        { id: 'home-and-contents', label: 'Vivienda y contenidos' },
      ],
    },
  ],
};

export const insurers = [
  {
    id: 'brisa-norte',
    name: 'Brisa Norte Demo',
    logo: '/logos/aseguradoras/brisa-norte.svg',
    alt: 'Brisa Norte Demo, aseguradora ficticia',
  },
  {
    id: 'brisa-valle',
    name: 'Brisa Valle Demo',
    logo: '/logos/aseguradoras/brisa-valle.svg',
    alt: 'Brisa Valle Demo, aseguradora ficticia',
  },
  {
    id: 'brisa-horizonte',
    name: 'Brisa Horizonte Demo',
    logo: '/logos/aseguradoras/brisa-horizonte.svg',
    alt: 'Brisa Horizonte Demo, aseguradora ficticia',
  },
] as const;

export const packages = [
  {
    id: 'esencial',
    name: 'Esencial',
    description: 'Una base ilustrativa para explorar opciones.',
  },
  {
    id: 'ampliado',
    name: 'Ampliado',
    description: 'Una alternativa con prestaciones ficticias adicionales.',
  },
  {
    id: 'completo',
    name: 'Completo',
    description: 'Un escenario demostrativo con más prestaciones ilustrativas.',
  },
] as const;

export const packageBenefits: Record<string, Record<string, string>> = {
  'gastos-medicos-individual': {
    esencial: 'Consultas ilustrativas y guía de atención.',
    ampliado: 'Añade atención hospitalaria de ejemplo.',
    completo: 'Añade seguimiento y orientación complementaria ficticios.',
  },
  'gastos-medicos-colectivo': {
    esencial: 'Orientación de salud ilustrativa para integrantes.',
    ampliado: 'Añade atención hospitalaria de ejemplo para el grupo.',
    completo: 'Añade seguimiento del programa y guía de movimientos ficticios.',
  },
  'auto-individual': {
    esencial: 'Responsabilidad civil y orientación vial de ejemplo.',
    ampliado: 'Añade robo total ilustrativo.',
    completo: 'Añade daños materiales de ejemplo al vehículo.',
  },
  'auto-flotilla': {
    esencial: 'Responsabilidad civil ilustrativa de flotilla y guía de administración.',
    ampliado: 'Añade robo total de ejemplo para las unidades del escenario.',
    completo: 'Añade daños materiales y orientación vial ficticios.',
  },
  'vida-hombre-clave': {
    esencial: 'Respaldo económico ilustrativo ante fallecimiento de la persona clave.',
    ampliado: 'Añade un escenario de invalidez ilustrativo.',
    completo: 'Añade orientación ficticia para organizar la continuidad del negocio.',
  },
  'danos-empresas': {
    esencial: 'Daños físicos ilustrativos a equipos.',
    ampliado: 'Añade inventario y mobiliario de ejemplo.',
    completo: 'Añade afectación ilustrativa del espacio de trabajo y orientación patrimonial.',
  },
  'riesgos-comerciales': {
    esencial: 'Responsabilidad frente a terceros de ejemplo en el local.',
    ampliado: 'Añade incidentes operativos ilustrativos durante la actividad.',
    completo: 'Añade orientación ficticia para organizar la respuesta del comercio.',
  },
  afinidad: {
    esencial: 'Guía ilustrativa de opciones de movilidad para la comunidad.',
    ampliado: 'Añade opciones de hogar de ejemplo dentro del programa.',
    completo: 'Añade acompañamiento ficticio al organizador y a integrantes.',
  },
  hogar: {
    esencial: 'Contenidos del hogar de ejemplo.',
    ampliado: 'Añade daños ilustrativos a la vivienda.',
    completo: 'Añade orientación y asistencias domésticas ficticias.',
  },
};

const scenarios: Record<string, Record<string, Record<string, number>>> = {
  'gastos-medicos-individual': {
    'brisa-norte': { esencial: 600, ampliado: 900, completo: 1200 },
    'brisa-valle': { esencial: 640, ampliado: 940, completo: 1240 },
    'brisa-horizonte': { esencial: 680, ampliado: 980, completo: 1280 },
  },
  'gastos-medicos-colectivo': {
    'brisa-norte': { esencial: 1800, ampliado: 2400, completo: 3000 },
    'brisa-valle': { esencial: 1850, ampliado: 2450, completo: 3050 },
    'brisa-horizonte': { esencial: 1900, ampliado: 2500, completo: 3100 },
  },
  'auto-individual': {
    'brisa-norte': { esencial: 400, ampliado: 650, completo: 900 },
    'brisa-valle': { esencial: 430, ampliado: 680, completo: 930 },
    'brisa-horizonte': { esencial: 460, ampliado: 710, completo: 960 },
  },
  'auto-flotilla': {
    'brisa-norte': { esencial: 1500, ampliado: 2100, completo: 2700 },
    'brisa-valle': { esencial: 1550, ampliado: 2150, completo: 2750 },
    'brisa-horizonte': { esencial: 1600, ampliado: 2200, completo: 2800 },
  },
  'vida-hombre-clave': {
    'brisa-norte': { esencial: 700, ampliado: 1000, completo: 1300 },
    'brisa-valle': { esencial: 740, ampliado: 1040, completo: 1340 },
    'brisa-horizonte': { esencial: 780, ampliado: 1080, completo: 1380 },
  },
  'danos-empresas': {
    'brisa-norte': { esencial: 900, ampliado: 1400, completo: 1900 },
    'brisa-valle': { esencial: 950, ampliado: 1450, completo: 1950 },
    'brisa-horizonte': { esencial: 1000, ampliado: 1500, completo: 2000 },
  },
  'riesgos-comerciales': {
    'brisa-norte': { esencial: 800, ampliado: 1200, completo: 1600 },
    'brisa-valle': { esencial: 840, ampliado: 1240, completo: 1640 },
    'brisa-horizonte': { esencial: 880, ampliado: 1280, completo: 1680 },
  },
  afinidad: {
    'brisa-norte': { esencial: 500, ampliado: 750, completo: 1000 },
    'brisa-valle': { esencial: 530, ampliado: 780, completo: 1030 },
    'brisa-horizonte': { esencial: 560, ampliado: 810, completo: 1060 },
  },
  hogar: {
    'brisa-norte': { esencial: 250, ampliado: 400, completo: 550 },
    'brisa-valle': { esencial: 280, ampliado: 430, completo: 580 },
    'brisa-horizonte': { esencial: 310, ampliado: 460, completo: 610 },
  },
};

export function demoPrice(
  insuranceSlug: string,
  insurerId: string,
  packageId: string,
): number | null {
  if (!Object.hasOwn(scenarios, insuranceSlug)) return null;
  const insurerPrices = scenarios[insuranceSlug];
  if (!Object.hasOwn(insurerPrices, insurerId)) return null;
  const packagePrices = insurerPrices[insurerId];
  return Object.hasOwn(packagePrices, packageId) ? packagePrices[packageId] : null;
}
