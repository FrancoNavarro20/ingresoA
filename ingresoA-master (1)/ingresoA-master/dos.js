/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marcaProducto;
  let acumulacionPesoTotal;
  let productoMasCaroDeLosLiquidos;
  let pesoKilogramosProducto;
  let precioProducto;
  let marcaProductoMasCaroDeLosLiquidos;
  let marcaProductoMasLivianoDeLosSolidos;
  let productoMasLivianoDeLosSolidos;
  let banderaPeso;
  let banderaPesoSolido;
  let banderaDeLiquidos;
  let tipoProducto;
  let respuesta;
  banderaPeso = 1;
  respuesta = true;
  banderaPesoSolido = 1;
  banderaDeLiquidos = 1;
  productoMasLivianoDeLosSolidos = 0;
  productoMasCaroDeLosLiquidos = 0;
  acumulacionPesoTotal = 0;
  while(respuesta == true)
  {

    //Validando la marca
    marcaProducto = prompt("Ingrese la marca del producto:");
    while(isNaN(marcaProducto) == false)
    {
      marcaProducto = prompt("Error!!!re-ingrese la marca del producto:");
    }

    //Validando el precio
    precioProducto = prompt("Ingrese el precio del producto:");
    precioProducto = parseFloat(precioProducto);
    while(isNaN(precioProducto))
    {
      precioProducto = prompt("re-ingrese el precio del producto:");
      precioProducto = parseFloat(precioProducto);
    } 

    
    pesoKilogramosProducto = prompt("Ingrese el peso en kilogramos:");
    pesoKilogramosProducto = parseFloat(pesoKilogramosProducto);
    while(isNaN(pesoKilogramosProducto))
    {
      pesoKilogramosProducto = prompt("re-ingrese el peso en kilogramos:");
      pesoKilogramosProducto = parseFloat(pesoKilogramosProducto);
    }

    
    if(banderaPeso == 1)
    {
      acumulacionPesoTotal = acumulacionPesoTotal + pesoKilogramosProducto;
    }

    tipoProducto = prompt("Ingrese el tipo del producto: (liquido o solido)");
    while(tipoProducto != "solido" && tipoProducto != "liquido")
    {
      tipoProducto = prompt("Error!!! re-ingrese el tipo de producto: (liquido o solido)");
    } 
    switch(tipoProducto)
    {
      case "liquido":                      					
        if(banderaDeLiquidos == 1 || precioProducto > productoMasCaroDeLosLiquidos)
        {
          productoMasCaroDeLosLiquidos = precioProducto
          marcaProductoMasCaroDeLosLiquidos = marcaProducto;
          banderaDeLiquidos = 0;
        }
        break;
      case "solido":			
      if(banderaPesoSolido == 1 || pesoKilogramosProducto < productoMasLivianoDeLosSolidos)
      {
        productoMasLivianoDeLosSolidos = pesoKilogramosProducto;
        marcaProductoMasLivianoDeLosSolidos = marcaProducto;
      }
      break;

    }

    respuesta = confirm("¿queres seguir ingresando productos?");
}  	

  if(productoMasLivianoDeLosSolidos == 0)
  {
    marcaProductoMasLivianoDeLosSolidos = "No se pudieron ingresar productos solidos";
  }
  if(productoMasCaroDeLosLiquidos == 0)
  {
    marcaProductoMasCaroDeLosLiquidos = "No se pudieron ingresar productos liquidos";
  }

  console.log("El peso  de la compra en total es: " + acumulacionPesoTotal );
  console.log("La marca del producto mas caro de los liquidos es: " + marcaProductoMasCaroDeLosLiquidos );
  console.log("La marca del producto mas liviano de los solidos es: " + marcaProductoMasLivianoDeLosSolidos  );




}
