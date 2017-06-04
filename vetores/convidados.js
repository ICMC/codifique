var convidados = [];

while(convidados.length < 10){
  var convida = true;
	var pessoa =  prompt("Quem voce quer convidar?");

	for(var i=0; i<convidados.length; i++){
		if(convidados[i] == pessoa){
          convida = false;
    }
  }
  if(convida == true){
	   convidados.push(pessoa);
  }
}

for(var j=0; j<convidados.length; j++){
	document.write(convidados[j] + "<br>");
}
