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
