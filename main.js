

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    if(document.body.classList.contains('dark')){
        sessionStorage.setItem('dark-mode','true');
    }else{
        sessionStorage.setItem('dark-mode','false');
    }
});
if(sessionStorage.getItem('dark-mode')=== 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.toggle('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

const btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
    boton = document.getElementById('boton');
});

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) =>{
     e.preventDefault();
     e.target.children[0].children[0].value="";
     e.target.children[0].children[1].value="";
     e.target.children[0].children[2].value="";
     e.target.children[0].children[3].value="";
})
btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

const capturar = () =>{
    function Gastos(fecha, gasto, detalle, costo){
		this.fecha=fecha;
        this.gasto=gasto;
        this.detalle=detalle;
		this.costo= costo;
    }
	const fechaCapturar = document.getElementById("fecha").value;
    const gastoCapturar = document.getElementById("gasto").value;
    const detalleCapturar = document.getElementById("detalle").value;
	const costoCapturar =  document.getElementById("costo").value;
    
    nuevosGastos = new Gastos(fechaCapturar,gastoCapturar,detalleCapturar,costoCapturar);
    agregar();
}
const baseDatos = [];
const agregar = () => {
    baseDatos.push(nuevosGastos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevosGastos.fecha+'</td><td>'+nuevosGastos.gasto+'</td><td>'+nuevosGastos.detalle+'</td><td>'+nuevosGastos.costo+'</td></tbody>';
    console.log(baseDatos)
};





