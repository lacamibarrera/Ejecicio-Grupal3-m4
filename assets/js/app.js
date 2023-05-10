let empresas = [];
let importaciones = [];

document.getElementById("formularioEmpresa").addEventListener("submit", (event) => {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let rut = document.getElementById("rut").value;
  let rubro = document.getElementById("rubro").value;
  let tamano = document.getElementById("tamano").value;
  let empresa = new EmpresaImportadora(empresas.length + 1, nombre, rut, rubro, tamano);
  empresas.push(empresa);
});

function agregarImportacion(empresaId, producto, numeroProductos, precioUnitario) {
  let empresa = empresas.find(empresa => empresa.id === empresaId);
  if (empresa) {
    let importacion = new Importacion(importaciones.length + 1, producto, numeroProductos, precioUnitario);
    empresa.agregarImportacion(importacion);
    importaciones.push(importacion);
    
    // Agregar fila a la tabla de importaciones
    let tablaImportaciones = document.getElementById("tablaImportaciones");
    let fila = tablaImportaciones.insertRow();
    fila.insertCell().textContent = importacion.id;
    fila.insertCell().textContent = importacion.producto;
    fila.insertCell().textContent = importacion.numeroProductos;
    fila.insertCell().textContent = importacion.precioUnit