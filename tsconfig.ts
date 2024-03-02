{
  "compilerOptions": {
    "target": "es2019", // Versión de ECMAScript a la que se compila el código
    "module": "esnext", // Sistema de módulos
    "strict": true, // Habilita todas las opciones de modo estricto de TypeScript
    "esModuleInterop": true, // Habilita la interoperabilidad de módulos de ECMAScript (permite importar módulos de CommonJS como esm)
    "skipLibCheck": true, // Omite la comprobación de tipos en archivos de definición de librerías (puede mejorar el tiempo de compilación)
    "sourceMap": true, // Genera archivos de mapas de origen para facilitar la depuración
    "inlineSources": true, // Incluye el código fuente en los archivos de mapa de origen (útil para depurar sin necesidad de los archivos fuente)
    "declaration": true, // Genera archivos de declaración (.d.ts) para permitir el uso de TypeScript en otras partes del proyecto
    "noUnusedLocals": true, // Marca como error las variables locales no utilizadas
    "noUnusedParameters": true, // Marca como error los parámetros de función no utilizados
    "lib": ["es2019", "dom"], // Librerías incluidas en el ámbito global durante la compilación
    "baseUrl": "./", // Directorio base para resolver módulos
    "paths": { // Mapeo de rutas de importación de módulos
      "@app/*": ["src/app/*"],
      "@env/*": ["src/environments/*"]
    },
    "typeRoots": ["node_modules/@types", "src/types"], // Rutas para buscar archivos de definición de tipos
    "outDir": "./dist/out-tsc", // Directorio de salida de los archivos compilados
    "rootDir": "./src", // Directorio raíz de los archivos fuente
    "strictPropertyInitialization": false, // Desactiva la comprobación estricta de inicialización de propiedades (útil en proyectos grandes donde la inicialización puede ser compleja)
    "strictNullChecks": true, // Habilita la comprobación estricta de nulos y undefined
    "strictBindCallApply": true, // Habilita la comprobación estricta de llamadas y aplicaciones de funciones
    "strictFunctionTypes": true, // Habilita la comprobación estricta de los tipos de funciones
    "noImplicitAny": true, // Marca como error las expresiones y declaraciones con tipo 'any'
    "allowSyntheticDefaultImports": true, // Habilita las importaciones por defecto sintéticas de módulos que no las tienen
    "resolveJsonModule": true // Permite la importación de archivos JSON como módulos
  },
  "angularCompilerOptions": {
    "enableIvy": true, // Habilita el compilador Ivy
    "fullTemplateTypeCheck": true, // Realiza una comprobación de tipo completa en las plantillas (puede ralentizar la compilación)
    "strictInjectionParameters": true // Requiere que los parámetros de inyección de dependencias en los constructores de los componentes y servicios sean explícitos
  },
  "include": ["src/**/*.ts"], // Archivos que deben incluirse en el proceso de compilación
  "exclude": ["node_modules"] // Archivos y directorios que deben excluirse del proceso de compilación
}
