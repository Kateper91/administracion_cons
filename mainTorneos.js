const btnAbrirModal = document.getElementById('btnAbrirModal'),
overlay_tor = document.getElementById('overlay_tor'),
modal = document.getElementById('modal'),
btnCerrarModal = document.getElementById('btn-close');
btnAbrirModal.addEventListener('click', function(){
    overlay_tor.classList.add('active');
    modal.classList.add('active');
    boton = document.getElementById('boton');
})

btnCerrarModal.addEventListener('click', function(e){
    e.preventDefault();
    overlay_tor.classList.remove('active');
    modal.classList.remove('active');
})

const equipos=[
    {id: 1, nombre:"Los amigos",  puntos:"0"},
    {id: 2, nombre:"Academicos",  puntos:"0"},
    {id: 3, nombre: "Lote 3 ",  puntos:"0"},
    {id: 4, nombre:"Finalistas",  puntos:"0"},
]
if (localStorage.getItem("equipos")=== null){
    localStorage.setItem("equipos", JSON.stringify(equipos));
}


    function cambiarPuntos(id, puntos){
    let equiposStorage = JSON.parse(localStorage.getItem("equipos"));
    console.log(equiposStorage);
//   console.log(typeof equiposStorage);
    let equiposEncontrado = equiposStorage.find(elemento => elemento.id === id);
    console.log(equiposEncontrado);
    equiposEncontrado.puntos=puntos;
    console.log (equiposStorage);
    localStorage.setItem("equipos", JSON.stringify(equiposStorage));
}
    let id = document.getElementById('numero') ;
    let puntos = document.getElementById('puntos');
    cambiarPuntos(id,puntos)


