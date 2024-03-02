# TsConfig

## target: Define la versión de ECMAScript a la que se compilará el código TypeScript. Puedes elegir entre "es5", "es6", "es2015", "es2016", etc. Cuanto mayor sea la versión, más características de ECMAScript estarán disponibles, pero ten en cuenta que ciertos navegadores pueden no admitir versiones más recientes.
"target": "es2018"

## module: Define el sistema de módulos que se utilizará. Puedes optar por "commonjs", "amd", "umd", "system", o "esnext", entre otros. En un proyecto de Angular, es común usar "esnext" para aprovechar las características de ES6 y posterior.
"module": "esnext"

## strict: Habilita o deshabilita un conjunto de opciones estrictas de TypeScript que te ayudan a detectar más errores en tu código durante el tiempo de compilación. Recomendado para proyectos grandes y mantenibles.

"strict": true

## noUnusedLocals y noUnusedParameters: Estas opciones habilitan la verificación de variables locales y parámetros no utilizados, lo que puede ayudar a identificar código muerto o errores de lógica.

"noUnusedLocals": true,
"noUnusedParameters": true

## esModuleInterop: Habilita la interoperabilidad de módulos ES6 y CommonJS. Esto puede ser útil si estás utilizando módulos ES6 en tu proyecto Angular junto con bibliotecas que usan módulos CommonJS.

"esModuleInterop": true

## skipLibCheck: Omite la comprobación de librerías (declaraciones de tipo) en archivos .d.ts. Puede mejorar significativamente el tiempo de compilación, especialmente en proyectos grandes con muchas dependencias de tipos.

"skipLibCheck": true

## resolveJsonModule: Habilita la carga de archivos JSON como módulos, lo que te permite importar y utilizar archivos JSON directamente en tu código TypeScript.
 
"resolveJsonModule": true

## rootDir y outDir: Estas opciones te permiten especificar directorios de entrada y salida personalizados para la compilación. Útil si deseas mantener una estructura de directorios específica en tu proyecto.
 
"rootDir": "src",
"outDir": "dist"
