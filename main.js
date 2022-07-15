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



