/*
 * 📌 Named Imports:
 * - Permiten importar específicamente ciertos valores desde un módulo, identificándolos por su nombre.
 * - Pueden renombrarse en la importación usando la palabra clave 'as'.
 *
 * Ejemplo:
 * import { nombre as nombreImportado, obtenerPosts } from "./namedExport"; // Importa 'nombre' y 'obtenerPosts' del módulo 'namedExport', renombrando 'nombre' a 'nombreImportado'.
 * console.log(`Mi nombre es ${nombreImportado}`); // Acceso y uso de la variable renombrada 'nombreImportado'.
 * console.log(obtenerPosts()); // Acceso y uso de la función 'obtenerPosts' importada.
 *
 * 📌 Namespace Imports:
 * - Permiten importar todo el contenido de un módulo como un único objeto, accediendo luego a sus exportaciones mediante propiedades de este objeto.
 * - Se utiliza la sintaxis import * as <alias> from 'ruta';
 *
 * Ejemplo:  */
import * as datos from "./namedExport"; // Importa todo el contenido de 'namedExport' en un objeto llamado 'datos'.
console.log(`Me llamo ${datos.nombre}`); // Accede a la propiedad 'nombre' del objeto 'datos'.
console.log(datos.obtenerPosts()); // Accede a la función 'obtenerPosts' del objeto 'datos' y la ejecuta.
