
let user;
let userStorage = sessionStorage.getItem("usuario");

if(userStorage){
    user = userStorage;
    let response = `Bienvenido ${user}`;
    alert(response);
}else{
    user =prompt("ingrese su nombre");
    sessionStorage.setItem("usuario", user);
}