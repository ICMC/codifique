var fibonacci = [0,1]
var numero;
var tamanho;

for(var i=0; i<25; i++){
  tamanho = fibonacci.length;
  numero =  fibonacci[tamanho -1]+fibonacci[tamanho-2];
  fibonacci.push(numero);
}

for(var j=0; j<fibonacci.length;j++){
  document.write(fibonacci[j] + "<br>");
}
