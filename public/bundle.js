'use strict';

/*
 * En JavaScript, la palabra clave 'export' se utiliza para exportar funciones, objetos o primitivas desde un módulo para que puedan ser utilizadas en otros módulos mediante la instrucción 'import'.
 *
 * 👉 Forma 1 - Palabra export:
 * - Aquí, las exportaciones se hacen directamente mientras se declaran las variables y funciones.
 *
 * Ejemplo:
 * export const nombre = "Charlie";  // Exporta la constante 'nombre'.
 * export const obtenerPosts = () => {  // Exporta la función 'obtenerPosts'.
 *   return ["Post1", "Post2", "Post3"];
 * };
 *
 * 👉 Forma 2 - Final del documento:
 * - En este caso, se declaran las variables y funciones normalmente, y luego se exportan al final del documento.
 *
 * Ejemplo: */
const nombre = "Charlie"; // Declara la constante 'nombre'.
const obtenerPosts = () => {
  // Declara la función 'obtenerPosts'.
  return ["Post1", "Post2", "Post3"];
};

/*
 * La exportación default se utiliza para exportar una única expresión por módulo. Este tipo de exportación puede ser importada usando cualquier nombre en otro módulo. Es útil cuando un módulo solo exporta una cosa, como una clase o una función.

 * 👉 Forma 1 - Mediante las palabras: export default:
 * - Aquí, se exporta la función directamente como exportación default.
 *
 * Ejemplo:
 * export default () => {  // Exporta por default una función anónima que retorna un objeto.
 *   return {
 *     nombre: "Snoopy",
 *     correo: "snoopy@mail.com",
 *   };
 * };
 */

/* 👉 Forma 2 - Final del documento:
 * - En este caso, se declara la función primero y luego se exporta como exportación default al final del documento.
 *
 * Ejemplo:
 */

const obtenerUsuario = () => {
  // Declara la función 'obtenerUsuario'.
  return {
    nombre: "Snoopy",
    correo: "snoopy@mail.com",
  };
};

/*
 * 📌 Empty Exports:
 * - En JavaScript, los módulos pueden exportar contenido para ser utilizado en otros módulos, pero no es obligatorio que un módulo exporte algo.
 * - En el ejemplo proporcionado, el archivo 'emptyExport.js' no tiene ninguna exportación, pero contiene código ejecutable.
 * - Cuando este módulo ('emptyExport.js') es importado en otro módulo, el código que contiene se ejecutará, pero no se exportará nada.
 * - Esto puede ser útil en situaciones donde un módulo realiza alguna inicialización o configuración que es necesaria, pero no proporciona ningún valor o función que necesite ser utilizado en otros lugares.
 *
 * Ejemplo:*/

console.log("Soy código que se ejecuta desde el archivo emptyExport.js"); // Esta línea se ejecutará cuando el módulo sea importado en otro módulo, aunque no haya ninguna exportación.

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
console.log(`Me llamo ${nombre}`); // Accede a la propiedad 'nombre' del objeto 'datos'.
console.log(obtenerPosts()); // Accede a la función 'obtenerPosts' del objeto 'datos' y la ejecuta.
console.log(obtenerUsuario()); // Invoca la función 'obtenerUsuario', que fue exportada por defecto desde 'defaulExport.js', y registra el resultado en la consola.
