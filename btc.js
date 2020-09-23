var dataa = document.getElementById('data');
var windgbp = document.getElementById("gbp");
var windusd = document.getElementById("usd");
var windeur = document.getElementById("eur");

var comEur = document.getElementById("tex1");
var comGbp = document.getElementById("tex2");
var comUsd = document.getElementById("tex3");
var time = document.getElementById("time");



function loaddoc(){
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
	xmlhttp.onreadystatechange = function js() {
		if (this.readyState == 4  &&  this.status == 200) {
			var json = JSON.parse(this.responseText);
			parseJson(json);
		}		
	};
	xmlhttp.open("GET", url, true); 	//Asynchronously 
	xmlhttp.send();
}
setInterval(loaddoc,1000); 				//Realtime

function parseJson(json) {

	var usd = json["bpi"]["USD"]["rate"];
	var gbp = json["bpi"]["GBP"]["rate"];
	var eur = json["bpi"]["EUR"]["rate"];
	
	var valusd = convertfloat(usd);
	var valgbp = convertfloat(gbp);
	var valeur = convertfloat(eur);
	
	comparisonEur(valeur);
	comparisonUsd(valusd);
	comparisonGbp(valgbp);
	
	windgbp.value=gbp;
	windeur.value=eur;
	windusd.value=usd;
	time.style["width"] = "70%";
	time.value = "Updeted : " + json["time"]["updated"];
	
}

function convertfloat(numb){
	var temp = numb.replace(",", ".");
	var arr = temp.split(".");
	var v1 = parseFloat(arr[0]);
	var v2 = parseFloat(arr[1]);
	var v3 = parseFloat(arr[2]);
	return v1+''+v2+''+v3;
}

var firstEur = 89143271;
var firstGbp = 80046851;
var firstUsd = 105237568;

function comparisonEur(lastEur){
	if(firstEur!=lastEur){
		if(firstEur<lastEur){
			comEur.value = "INC";
			firstEur=lastEur;
			windeur.style["background-color"] = "red";
			comEur.style["background-color"] = "red";
		}
		else if(firstEur>lastEur){
			comEur.value="DEC";
			firstEur=lastEur;
			windeur.style["background-color"] = "green";
			comEur.style["background-color"] = "green";

		}
		else{
			comEur.value="stabil";
			windeur.style["background-color"] = "yellow";
			comEur.style["background-color"] = "yellow";
		}
	}
}
function comparisonGbp(lastGbp){
	if(firstGbp!=lastGbp){
		if(firstGbp<lastGbp){
			comGbp.value = "INC";
			firstGbp=lastGbp;
			windgbp.style["background-color"] = "red";
			comGbp.style["background-color"] = "red";

		}
		else if(firstGbp>lastGbp){
			comGbp.value="DEC";
			firstGbp=lastGbp;
			windgbp.style["background-color"] = "green";
			comGbp.style["background-color"] = "green";
		}
		else{
			comGbp.value="stabil";
			windgbp.style["background-color"] = "yellow";
			comGbp.style["background-color"] = "yellow";
		}
	}
}

function comparisonUsd(lastUsd){
	if(firstUsd!=lastUsd){
		if(firstUsd<lastUsd){
			comUsd.value = "INC";
			firstUsd=lastUsd;
			windusd.style["background-color"] = "red";
			comUsd.style["background-color"] = "red";
		}
		else if(firstUsd>lastUsd){
			comUsd.value="DEC";
			firstUsd=lastUsd;
			windusd.style["background-color"] = "green";
			comUsd.style["background-color"] = "green";
		}
		else{
			comUsd.value="stabil";
			windusd.style["background-color"] = "yellow";
			comUsd.style["background-color"] = "yellow";
		}
	}
}

