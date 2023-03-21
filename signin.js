let clave, nombreUsuario, newpassword, pregunta, Pin;

Pin = "3434";
const usuario = "dayanne";
nombreUsuario = prompt("ingrese su usuario");
clave = parseInt(prompt("ingrese su clave"));

if (clave == Pin && nombreUsuario == usuario) {
  alert("welcome back");
} else {
  pregunta = prompt("¿desea cambiar su contraseña? escriba 1-si ó 2-no");
  newpassword = prompt("ingrese nueva contraseña");
  Pin=newpassword;
  newpassword = alert(`su contraseña es ${newpassword}`);

}


