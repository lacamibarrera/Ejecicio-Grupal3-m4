class Empresa {
    constructor(id, nombre, rut) {
      this.id = id;
      this.nombre = nombre;
      this.rut = rut;
      this.importaciones = [];
    }
  
    agregarImportacion(importacion) {
      this.importaciones.push(importacion);
    }
  
    sumaTotalImportaciones() {
      let total = 0;
      for (let importacion of this.importaciones) {
        total += importacion.precioUnitario * importacion.numeroProductos;
      }
      return total;
    }
  }
  
  class EmpresaImportadora extends Empresa {
    constructor(id, nombre, rut, rubro, tamano) {
      super(id, nombre, rut);
      this.rubro = rubro;
      this.tamano = tamano;
    }
  }