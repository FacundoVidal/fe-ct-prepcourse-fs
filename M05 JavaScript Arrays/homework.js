/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ult = array.length -1;
   return (array[ult]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let i=0; i!=array.length; i++){
      array[i]=array[i]+1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var dato=array[0];
   
array[0]=elemento;

   for (let i=1 ; i!=array.length;i++){
      var dato1=array[i];
      array[i]=dato;
      dato=dato1
      
   }
   array.push(dato);
  
   return(array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
var mensaje=palabras[0]
   for (let i=1; i!=palabras.length;i++){
   mensaje=mensaje+" "+palabras[i];
}
return mensaje
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var esta=false

   for (let i=0;i!=array.length;i++){
      if (array[i]==elemento){
         esta=true;
         break;
      }
   }
   return esta;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado=0;
   for (let i=0; i!=arrayOfNums.length;i++){
      resultado=resultado+arrayOfNums[i];
   }
   return resultado;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   return(agregarNumeros(resultadosTest)/resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor=arrayOfNums[0]
   for(let i=1; i!=arrayOfNums.length;i++){
      if (arrayOfNums[i]>mayor){
         mayor=arrayOfNums[i];
      }
   }
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments.length === 0) {
      return 0;
   }

   // Inicializa la variable de multiplicación en 1
   var multiplicacion = 1;

   // Multiplica cada argumento
   for (let i = 0; i < arguments.length; i++) {
      multiplicacion *= arguments[i];
   }

   return multiplicacion;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cont=0;
   for (let i=0;i<array.length;i++){
      if (array[i]>18){
         cont=cont+1;
      }
   }
   return cont;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var mensaje="Es dia laboral";
   if (numeroDeDia==1 || numeroDeDia==7){
      mensaje="Es fin de semana"
   }
   return mensaje;
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString();

   // Verifica si el primer carácter de la cadena es "9"
   return numStr.charAt(0) === '9';
   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var igualdad=true;
   var elemento= array[0];
   for (let i=0;i<array.length;i++){
      if(elemento!=array[i]){
         igualdad=false;
      }
   }
   return igualdad
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var cont=0;
   var resultado=[ null,null,null];
   for (let i =0; i<array.length;i++){
      if(array[i]=="Enero"){
         resultado[cont]= "Enero";
         cont=cont+1;
      }else if(array[i]=="Marzo"){
         resultado[cont]= "Marzo";
         cont=cont +1;
      }else if(array[i]=="Noviembre"){
         resultado[cont]= "Noviembre";
         cont=cont+1;
      }
   }
   if (cont!=3){
      return ("No se encontraron los meses pedidos")
   }else {
      return resultado;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla =[];
   for (let i=0; i!=10;i++){
      tabla.push(6*i);
   }
   tabla.push(60);
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayores=[];
   for(let i=0;i<array.length;i++){
      if (array[i]>100){
         mayores.push(array[i]);
      }
   }
   return mayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
  var suma=num;
  var array=[];
   for (let i=0;i!=10;i++){
      suma=suma+2;
      if(suma==i){
         return("Se interrumpió la ejecución");
         break
      }else {
         array.push(suma);
      }
   }
   return array;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var suma=num;
   var array=[];
    for (let i=0;i!=10;i++){
       
       if(i!=5) {
         suma=suma+2;
          array.push(suma);
       }
    }
    return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
