/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombreIngresado;
	let temperaturaIngresada;
	let sexoIngresado;
	let edadIngresada;
	let contadorWhile;
	let cantidadHombres;
	let cantidadMujeres;
	let promedioEdadesTotal;
	let contadorEdades;
	let acumuladorEdades;
	let mujerConMasTemperatura;
	let nombreDeLaMujerConMasTemperatura;
	let banderaMujerTemperatura;
	let banderaEdad;	
	banderaEdad = 1;
	banderaMujerTemperatura = 1;
	mujerConMasTemperatura = 0;
	contadorEdades = 0;
	contadorWhile = 0;
	cantidadHombres = 0;
	acumuladorEdades = 0;
	cantidadMujeres = 0;
	while(contadorWhile < 5)
	{

		
		nombreIngresado = prompt("Ingrese su nombre:");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error!!! re-ingrese su nombre:");
		}

		
		temperaturaIngresada = prompt("Ingrese su temperatura:");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada))
		{
			temperaturaIngresada = prompt("Error!!! re-ingrese su temperatura:");
		}


		
		sexoIngresado = prompt("Ingrese su sexo: (masculino o femenino)");
		while(sexoIngresado != "masculino" && sexoIngresado != "femenino")
		{
			sexoIngresado = prompt("Error!!! re-ingrese su sexo: (masculino o femenino)");
		}

		
		switch(sexoIngresado)
		{
			case "masculino":
				cantidadHombres++;
				break;
			case "femenino":
				cantidadMujeres++;
				
				if(banderaMujerTemperatura == 1 || temperaturaIngresada > mujerConMasTemperatura)
				{
					mujerConMasTemperatura = temperaturaIngresada;
					nombreDeLaMujerConMasTemperatura = nombreIngresado;
					banderaMujerTemperatura = 0;
				}
				break;	
		}
		edadIngresada = prompt("Ingrese su edad:");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 1)
		{
			edadIngresada = prompt("Error!!! re-ingrese su edad:");
		}

		if(banderaEdad == 1)
		{
			acumuladorEdades = acumuladorEdades + edadIngresada;
			contadorEdades++;
		}

		contadorWhile++;
	}
	promedioEdadesTotal = acumuladorEdades / contadorEdades;
	if(mujerConMasTemperatura == 0)
	{
		mujerConMasTemperatura = "No pudieron ingresarse las   mujeres";
		nombreDeLaMujerConMasTemperatura = "No se ingresaron mujeres";
	}

	
	console.log("La cantidad de varones es: " + cantidadHombres + " y la cantidad de mujeres es: " + cantidadMujeres);
	console.log("La mujer con mas temperatura se llama: " + nombreDeLaMujerConMasTemperatura);
	console.log("El promedio  de edad es : " + promedioEdadesTotal);
	console.log("Su temperatura es : " + mujerConMasTemperatura);

}
