var value;
var arrayAscii=[];
var arrayInt=[];
var valueAscii;
var sumTotal=0;
var auxAscii;

function isValidCard (value){
auxStr='';
do{
  do{
 value= prompt("INGRESA TU NUMERO DE TARJETA"); //debe ser el prompt que solicite el mensaje
    if(value.length != 16 || value === ''){
       alert( 'RECUERDA DEBES INGRESAR 16 DIGITOS ');
    }else{
      for(var i=0; i< value.length; i++){
        auxAscii=value.charCodeAt(i);
         if(auxAscii>= 48 && auxAscii<=57){
          arrayAscii.push(auxAscii);
           // console.log(arrayAscii);
         }else{
           alert('INGRESASTE UN SIMBOLO INVALIDO...NOTA:INGRESA DIGITOS DEL 0 AL 9 ');
           break;
         }//cierra else

      }//cierra for en i

   var reveArrayAscii=arrayAscii.reverse(); // se invierte el arreglo obtenido en el for

  for(var j=0; j<reveArrayAscii.length; j ++){
     var str= String.fromCharCode(reveArrayAscii[j]);//se convierte cada valor en Ascii a texto convencional.
     arrayInt.push(parseInt(str));//se convierte la String a un Entero y se Agrega a un arreglo

   }//cierre del for en j
    //console.log(reveArrayAscii);
     for(k=0; k<arrayInt.length; k++){
       if((k+1)%2===0){
         var multyParResult=arrayInt[k]*2;

           if(multyParResult>=10){
             var sumaDigit=(multyParResult-10)+1;//suma el digito base que sera uno y busca el segundo digito que se obtiene al quitarle la base que es 10
             arrayInt[k]=sumaDigit;//manda el resultado de la suma a la posicion correspondiente del arreglo
            }else {//if que se encuentra anidado en el if que esta dentro del for en k.
            arrayInt[k]=multyParResult;//se asigna directamente el valor multiplicado por 2 cuyo resultado no es mayor a 10.
            }//cierra el else de multyParResult.

       } //cierra el if dentro del for en k
        // console.log(arrayInt);
         sumTotal +=arrayInt[k];

      }//cierra el for en k

     if(sumTotal%10===0){
       //console.log(sumTotal);
       //console.log(arrayInt);
       return "TARJETA DE CREDITO VALIDA";
     }else{//Cierra el if que se encuentra dentro del for en j
    // console.log(sumTotal);
     return "El numero de tu tarjeta es Invalido";
     }//cierra el else de sumTotal

    }//cierra else principal for value

  }while(auxAscii<48 || auxAscii>57);


}while(value.length != 16 || value === '');

}//cierra la funcion
isValidCard(value)
