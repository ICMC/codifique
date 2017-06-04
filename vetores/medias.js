var semana = [50, 75, 23, 0, 34, 100, 45];
var max =0;
var min = 999999999;
var total = 0;
var media;

for(var i=0; i<semana.length; i++){
  if(max < semana[i]){
    max = semana[i];
  }
  else if (min > semana[i]) {
    min = semana[i];
  }
  total = total + semana[i];
}

media = total/(semana.length);

document.write("Maximo: "+ max + "<br> Minimo: " + min);
document.write("<br> Total: "+ total + "<br> Media: "+ media);
