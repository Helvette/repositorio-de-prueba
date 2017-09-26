// EJERCICIOS 26 DE SEPTIEMBRE


/* Calcular el sueldo semanal de una trabajador con base en las horas que trabaja
Ejemplo: Carol gana 10.000 por hora y trabaja 20 horas a la semana. 20 * 10.000 = 200000
*/

function salaryWeek(hours,payment){
	var salary = hours * payment;
	return salary;
}

// Otra opción, igual de válida, en la anterior creamos la variable que guarde el resultado.

function salaryWeek(hours,payment){
	return hours * payment;
}


// Calcular la cantidad de dígitos de un número, por ej: 1986, deberá retornar 4   

function numberOfDigits(number){
	var counter = 0;
	var digits = number.toString();
	// "1986"
	for (var i = 0 ; i < digits.length ; i++){ // i+=2  es lo mismo que i = i + 2
		counter++;
	}
	return counter;
}

// i++ = i + 1
// i+=2  = i + 2
// RECORDATORIO = length determina la longitud, no es como la posición del último caracter.

// Determinar si una palabra es un palíndromo


"alexandra".split("")  //devuelve cada caracter por separado y los cuenta
"alexandra"split("").reverse()  //la devuelve al revés
"alexandra"split("").reverse("").join("") //reverse y join funcionan sobre los arreglos

// Versión con for 

function palindrome(word){
	var long = word.length;
	for (var i = 0 ; i < word.length ; i++){
		if(word[i] !== word[long - 1 - i]){  // aquí lo que hace es que lo recorre de derecha a izquierda
			return false;
		}
	}
	return true;
}
