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
export { nombre, obtenerPosts }; // Exporta 'nombre' y 'obtenerPosts' al final del documento.
