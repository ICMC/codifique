var coisas=[]

for(var i=0; i<5; i++){
  coisas[i]=prompt("Coisas que voce gosta: ");
}

coisas.sort();

for(var j=0; j< coisas.length; j++){
  document.write(coisas[j] + "<br>");
}
