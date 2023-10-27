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

/*
 * 📌 Default Imports:
 * - Cuando un módulo exporta una sola cosa por defecto (ya sea una función, objeto, clase, etc.), se puede importar en otro módulo usando la sintaxis de importación predeterminada.
 * - La sintaxis es sencilla: se utiliza la palabra clave 'import', seguida de un nombre que se decide (puede ser cualquier nombre válido), y luego la ruta al módulo que se está importando.
 * - El nombre que se decide no necesita coincidir con el nombre del export default en el módulo exportador, ya que es una exportación predeterminada.
 * - La exportación predeterminada de un módulo solo puede ser importada de esta manera una vez en un módulo específico.
 *
 * Ejemplo:*/

import obtenerUsuario from "./defaulExport"; // Importa la exportación predeterminada del módulo 'defaulExport.js' y la asigna a la constante 'obtenerUsuario'.
console.log(obtenerUsuario()); // Invoca la función 'obtenerUsuario', que fue exportada por defecto desde 'defaulExport.js', y registra el resultado en la consola.
