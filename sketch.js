//Comentarios - al javascript no le importan los comentarios y los espacios.
//2016 07 24, fecha.
//funciona con p5.js

//estoy haciendo un lienzo de un color 
//con elipse que sigue al mouse

// cmd+t=vuelve los códigos a su orden:paréntesis, llaves, etc.

//color en términos de p5.js es por defecto RGB(red, green, blue)
//y cada valor va entre 0 y 255 (ej, hay 255 versiones de rojo).
//hay 4 formas de decir un color:
//1->grayscale, 0 es negro y 255 es blanco.
//2->
//3->rgb, red, green, blue, con 0 es nada y 255 es todo.

//colorMode(RGB, x), eso dice que va entre 0 y x.

//colorpicker.com es para hacer colores

//variables (LAS CREO, ASIGNO UN VALOR Y LUEGO LAS USO, regla)
//Son espacios en memoria del computador
//almacenan valores y pueden cambiar durante
//la ejecución del software
//paracrear una, se debe declarar SOLO una vez por var. SOLO UNA VEZ
//así se hace en javascript
//Se deben declarar en lugares específicos.

var x;
//solo dp de declararla, se puede dar un valor. ASIGNARLE VALOR.
//se pueden asignar cuanta veces se quiere, pero siempre dp de ser DECLARADA.

x = 10;

//hay dos tipos de variables.
//globales y locales.
//la dif radica donde son declaradas.
//las var globales son declaradas FUERA del cuerpo de alguna FUNCIÓN.
//las variables locales son declaradas DENTRO del cuerpo de alguna FUNCIÓN.

//setup() corre una vez al principio.

//FUNCIONES. Al igual que las var, tienen que ser declaradas.
//En javascript, se declaran así (existen más maneras tb)
//function nombreFuncion(){}
  //acá va cuerpo

  

function setup() {

  //crear un lienzo
  //createCanvas(dimHoriz, dimVer);
  //createCanvas(800, 600);
  //para calcular los valores del navegador.
  createCanvas(windowWidth, windowHeight);

  //crear var local verde
  var verde;
  //asignarle valor= 255;
  verde = 255;
  var rojo = 255;
  //atajo: se puede declarar y asignar un valor inicial
  // en una misma linea
  // var verde=255; (no colocar var verde
  //var verde=255; no asignar dos var continuas con el mismo nombre)

  //pintar el fondo del lienzo
  //background(color);
  //background(0, 255, 0); //(0, 0, 0) es negro y (255, 255, 255) es blanco.
  background(0, verde, 0);

}

//draw() corre luego de setup, 60 veces por segundo.
function draw() {

  //background(100, 20, 50); Esto es si quiero que la estela no siga al mouse
  //y no quede rastro

  //crear una elipse en la posición 100, 300.
  //hay un apartado en la web de figuras 2d, 3d, etc
  //ellipse(posX, posY, width, height);
  //ellipse(100, 300, 100, 90);
  //variable en mouseX, mouseY
  ellipse(mouseX, mouseY, 100, x);

  //ejemplo camelCase

  //aumentar diámetro en 1
  //a la var diámetro,asígnale el valor del resultado de ...
  
  x= x+1;
}

//windowResized es ejecutada cada vez que la ventana del navegador
//cambia de tamaño
function windowResized() {

  //resizeCanvas(w...,w) readecúa el tamaño acorde al tamaño de la ventana 
  //del navegador.
  resizeCanvas(windowWidth, windowHeight);

  //pintar el fondo del lienzo
  //background(color);
  background(100, 20, 50); //(0, 0, 0) es negro y (255, 255, 255) es blanco.



}
