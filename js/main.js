$(document).ready(function(){

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]


var newDate = new Date();

newDate.setDate(newDate.getDate());
  
$('#Date').html(dias[newDate.getDay()] + " " + newDate.getDate() + ' ' + meses[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval(function(){
	var segundos = new Date().getSeconds();
	$("#segundos").html(( segundos < 10 ? "0" : "" ) + segundos);
	},1000);
	
setInterval(function(){
	var minutos = new Date().getMinutes();
	$("#minutos").html(( minutos < 10 ? "0" : "" ) + minutos);
    },1000);
	
setInterval(function(){
	var horas = new Date().getHours();
	$("#horas").html(( horas < 10 ? "0" : "" ) + horas);
    }, 1000);	
});


var ciudades = [
			{ciudad:"Chicago", zonaHoraria:"GMT -5"}, 
			{ciudad:"Sao Paulo", zonaHoraria:"GMT -3"}, 
			{ciudad:"Santiago", zonaHoraria:"GMT -4"}, 
			{ciudad:"Mexico D.F", zonaHoraria:"GMT -5"}, 
			{ciudad:"Caracas", zonaHoraria:"GMT -4"}, 
			{ciudad:"Brasilia", zonaHoraria:"GMT -3"}, 
			{ciudad:"Quito", zonaHoraria:"GMT -5"}, 
			{ciudad:"Gauyaquil", zonaHoraria:"GMT -5"}, 
			{ciudad:"Santa Marta", zonaHoraria:"GMT -5"}, 
			{ciudad:"bogota", zonaHoraria:"GMT -5"}
			];



function zone(){
	for(var i = 0; i <= 9; i++){
		$("#zonas").append("<li class=list>" + "<input type='checkbox'/>" + "Ciudad: " + ciudades[i].ciudad + " ; " + "Zona Horaria: " + ciudades[i].zonaHoraria + "</li>");
	};
}

