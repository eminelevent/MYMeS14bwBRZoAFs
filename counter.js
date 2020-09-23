var wind = document.getElementById('counter');
var hourinc = document.getElementById("hourinc");
var hourdec = document.getElementById("hourdec");
var minuteinc = document.getElementById("minuteinc");
var minutedec = document.getElementById("minutedec");
var secondinc = document.getElementById("secondinc");
var seconddec = document.getElementById("seconddec");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

hourinc.addEventListener('click', hourincc);
hourdec.addEventListener('click', hourdecc);
minuteinc.addEventListener('click', minuteincc);
minutedec.addEventListener('click', minutedecc);
secondinc.addEventListener('click', secondincc);
seconddec.addEventListener('click', seconddecc);


function hourincc(){
	if(hour.value <9){
		hour.value = parseInt(hour.value) + 1;
	}
	else if( hour.value==9 ){
		second.value=0;
		minute.value=0;
		hour.value= parseInt(hour.value) + 1;
	}
	else if(hour.value==0){
		
	}
}

function hourdecc(){
	if(hour.value != 0){
		hour.value = parseInt(hour.value) - 1;
	}
}

function minuteincc(){
	if(hour.value != 10){
		if(minute.value ==59){
			minute.value = 0;
			hourincc();
		}
		else{
			minute.value = parseInt(minute.value) + 1;
		}
	}
}

function minutedecc(){
	if(minute.value==0){
		minute.value = 59;
		hourdecc();
	}
	else{
		minute.value = parseInt(minute.value) - 1;
	}
}

function secondincc(){
	if(hour.value != 10){
		if(second.value==59){
			second.value = 0;
			minuteincc();
		}
		else{
			second.value = parseInt(second.value) + 1;			
		}
	}
}

function seconddecc(){
	if(second.value==0){
		second.value = 59;
		minutedecc();
	}
	else{
		second.value = parseInt(second.value) - 1;
	}
}
