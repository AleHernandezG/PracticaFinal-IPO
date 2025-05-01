export default class Lugar {
  constructor(
    id,
    nombre,
    tipo,
    direccion,
    telefono,
    disponible,
    favorito,
    horario,
    descripcion,
    accesibilidad,
    rutaImagen,
    posicion
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.disponible = disponible;
    this.favorito = favorito;
    this.horario = horario;
    this.descripcion = descripcion;
    this.accesibilidad = accesibilidad;
    this.rutaImagen = rutaImagen;
    this.posicion = posicion;
  }

  setLugar(
    id,
    nombre,
    tipo,
    direccion,
    telefono,
    disponible,
    favorito,
    horario,
    descripcion,
    accesibilidad,
    rutaImagen,
    posicion
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.disponible = disponible;
    this.favorito = favorito;
    this.horario = horario;
    this.descripcion = descripcion;
    this.accesibilidad = accesibilidad;
    this.rutaImagen = rutaImagen;
    this.posicion = posicion;
  }

  getLugar() {
    return {
      id: this.id,
      nombre: this.nombre,
      tipo: this.tipo,
      direccion: this.direccion,
      telefono: this.telefono,
      disponible: this.disponible,
      favorito: this.favorito,
      horario: this.horario,
      descripcion: this.descripcion,
      accesibilidad: this.accesibilidad,
      rutaImagen: this.rutaImagen,
      posicion: this.posicion,
    };
  }
}
