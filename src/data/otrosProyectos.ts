// Otros repositorios — base técnica previa a SAP. Fuente: Brief §7.
export interface OtroProyecto {
  nombre: string;
  repoUrl: string;
  stack: string[];
  descripcion: string;
  extra?: { texto: string; url: string };
}

export const otrosProyectos: OtroProyecto[] = [
  {
    nombre: 'canister-api',
    repoUrl: 'https://github.com/alcaan16/canister-api',
    stack: ['Node.js', 'Express 5'],
    descripcion:
      'API REST con separación por capas —rutas, controladores, servicios— y CORS. La misma idea de modelo + servicio que después aparece en CAP.',
  },
  {
    nombre: 'mundoacuatico',
    repoUrl: 'https://github.com/alcaan16/mundoacuatico',
    stack: ['React 19', 'Zustand', 'React Router 7', 'Vite'],
    descripcion:
      'Front de tienda con estado global, hooks propios y rutas protegidas. Consume canister-api.',
  },
  {
    nombre: 'PokeApi',
    repoUrl: 'https://github.com/alcaan16/PokeApi',
    stack: ['Astro 5', 'TypeScript', 'Tailwind CSS', 'pnpm'],
    descripcion:
      'Sitio estático generado en build sobre una API pública, con rutas por entidad. Mismo stack que este portfolio.',
  },
];
