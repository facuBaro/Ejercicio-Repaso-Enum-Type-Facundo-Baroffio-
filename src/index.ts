enum RolUsuario{
    ADMINISTRADOR="ADMINISTRADOR",
    EDITOR="EDITOR",
    VISUALIZADOR="VISUALIZADOR"
} 
interface DatosUsuario {

    nombre: string;
  
    email: string;
  
    edad: number;
  
    activo: boolean;
  
    rol: RolUsuario;
  
  }
  interface Usuario {

    id: number;
  
    nombre: string;
  
    email: string;
  
    edad: number;
  
    activo: boolean;
  
    fechaCreacion: Date;
  
    rol: RolUsuario;
  
  }
  function crearUsuario(datos: DatosUsuario): Usuario {

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



  console.log("Usuario creado: ");
  console.log(nuevoUsuario);
  console.log(`ID: ${nuevoUsuario.id}`);
  console.log(`Nombre: ${nuevoUsuario.nombre}`);
  console.log(`Email: ${nuevoUsuario.email}`);
  console.log(`Fecha de creacion: ${nuevoUsuario.fechaCreacion}`);
   console.log(`Rol: ${nuevoUsuario.rol}`); // Salida: EDITOR (o la cadena asignada)


  