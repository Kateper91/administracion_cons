const btnAbrirModal = document.getElementById('btnAbrirModal'),
flotante = document.getElementById('flotante')
modal = document.getElementById('modal'),
btnCerrarModal = document.getElementById('btn-close');
btnAbrirModal.addEventListener('click', function(){
    flotante.classList.add('active');
    modal.classList.add('active');
})

btnCerrarModal.addEventListener('click', function(e){
    e.preventDefault();
    flotante.classList.remove('active');
    modal.classList.remove('active');
})
const guardarStorage=(clave,valor)=>{localStorage.setItem(clave,valor)}
const equipos=[
    {id: 1, nombre:"Los amigos",  puntos:"0"},
    {id: 2, nombre:"Academicos",  puntos:"0"},
    {id: 3, nombre: "Lote 3 ",  puntos:"0"},
    {id: 4, nombre:"Finalistas",  puntos:"0"},
]
for (const equipo of equipos){
    guardarStorage(equipo.id, JSON.stringify(equipo));
}

localStorage.setItem("equipos", JSON.stringify(equipos));

const cambiar = () =>{
function cambiarPuntos(id, puntos){
  let equiposStorage = JSON.parse(localStorage.getItem("equipos"));
  let equiposEncontrado = equiposStorage.find(elemento => elemento.id === id);
  equiposEncontrado=puntos;
  localStorage.setItem("equipos", JSON.stringify(equiposStorage));
} 

let id = document.getElementById("id").value;
let puntos = document.getElementById("puntos").value;
cambiarPuntos(id, jugados,ganados,perdidos,puntos)
}
