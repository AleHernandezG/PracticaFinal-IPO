// Persona.js
export default class Persona {
  constructor(nombre, email, contrasena, idAvatar, activo) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.idAvatar = idAvatar;
    this.activo = activo;
  }

  mostrarDatos() {
    alert(
      `Nombre: ${this.nombre}\nEmail: ${this.email}\nContraseña: ${this.contrasena}\nAvatar: ${this.idAvatar}\nActivo: ${this.activo}`
    );
  }

  establecerDatos(nombre, email, contrasena, idAvatar, activo) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.idAvatar = idAvatar;
    this.activo = activo;
  }

  obtenerDatos() {
    return {
      nombre: this.nombre,
      email: this.email,
      contrasena: this.contrasena,
      idAvatar: this.idAvatar,
      activo: this.activo,
    };
  }
}
