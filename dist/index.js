"use strict";
var RolUsuario;
(function (RolUsuario) {
    RolUsuario["ADMINISTRADOR"] = "ADMINISTRADOR";
    RolUsuario["EDITOR"] = "EDITOR";
    RolUsuario["VISUALIZADOR"] = "VISUALIZADOR";
})(RolUsuario || (RolUsuario = {}));
function crearUsuario(datos) {
    return {
        id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        edad: datos.edad,
        activo: datos.activo,
        rol: datos.rol,
        fechaCreacion: new Date(),
    };
}
const datosDeEntrada = {
    nombre: "Ana Garcia",
    email: "ana@email.com",
    edad: 28,
    activo: true,
    rol: RolUsuario.EDITOR, // O "ADMINISTRADOR" o "VISUALIZADOR"
};
const nuevoUsuario = crearUsuario(datosDeEntrada);
console.log(nuevoUsuario.rol); // Salida: EDITOR (o la cadena asignada)
