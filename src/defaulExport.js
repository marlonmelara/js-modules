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

export default obtenerUsuario; // Exporta por default la función 'obtenerUsuario' al final del documento
