// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var arreglo=array;
  return arreglo[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
var ultimo=array.length;
return array[ultimo-1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo=array.length;
  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i=0; i<array.length;i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var largo=array.length;
  array[largo]=elemento;
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;


}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str="";
  var caractervacio=" ";
  
  for(var i=0;i<=palabras.length-1;i++){
   if(i===0){
     str=palabras[0];
     }
    else{
    str=str+caractervacio+palabras[i];
    }
  }
return str;


}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i=0; i<array.length;i++){
    if (array[i]===elemento){
      return true;
    }
   }
   return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var suma =0;
  for(var i=0;i<numeros.length;i++){
    suma =suma+numeros[i];
  }
 return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  var suma=0;
  
  for(var i=0;i<resultadosTest.length;i++){
    suma =suma+resultadosTest[i];
  }
  promedio=suma/resultadosTest.length;
  return promedio;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var numMax=numeros[0];
for(var i=0;i<numeros.length;i++){
  if (numeros[i]>numMax){
    numMax=numeros[i];
    }
}
return numMax;  
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0;i<arguments.length;i++){
    total=total*arguments[i];
  }
  return total;
}




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contadorElementos=0;
 for ( var i=0;i<arreglo.length;i++){
   contadorElementos=contadorElementos+1;
 }
 return contadorElementos;
 }


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

if(numeroDeDia===1 || numeroDeDia===7){
  return "Es fin de semana";
}
else {
  return "Es dia Laboral";
}

} 



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //Una forma es sacar la cantidad de digitos del numero n
  //y comprobar si el primer digito es nueve
  var contDigitos=0;  
  var aux=n;
  var aux1=0;
  lista=[];
  while (aux!=0){
    contDigitos=contDigitos+1;
    aux1=aux%10;
   // console.log(aux1);
    aux=Math.trunc(aux/10);
    //console.log(aux);
   lista.unshift(aux1); 
  
  }
 //console.log(lista);
  if(lista[0]===9){
    return true;
  }
  else{
    return false;
  }

}



function todosIguales(arreglo) {

  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i=0;i<arreglo.length-1;i++){
    if (arreglo[i]!==arreglo[i+1]){
      return false;
    }
  else{
    return true;
  }
}
} 

// array=["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray=[];


  for (var i=0;i<array.length-1;i++){
   if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
     nuevoArray.push(array[i]);
   }
  }
   if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}
orientation
no se que palabras
prueba reiniciando
otras mas 
3334

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
