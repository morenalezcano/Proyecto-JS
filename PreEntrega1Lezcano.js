//Mi primer preentrega se va a tratar sobre una empresa que vende llaveros.//

//Objetos
class Llaveros {
    constructor(material,valor,stok){

        this.material=material;
        this.valor=valor;
        this.stok=stok;
    }
}

const llaveros1=[
    new Llaveros("acrilico",350,1000),
    new Llaveros("madera",300,200),
    new Llaveros("metal",500,800)
]
function calcularprecio(cantidad, precioUnidad){
    return precioUnidad * cantidad;
}

function descuento(total){
    if (total > 20000){
        total *= 0.80; 
    } else if (total > 5000){
        total *= 0.90; 
    }
    return total;
}

function totalApagar(total){
    if (total > 20000){
        alert("El total a pagar con descuento del 20% por haber superado los $20000 es $" + total);
    } else if (total > 5000){
        alert("El total a pagar con descuento del 10% por haber superado los $5000 es $" + total);
    } else {
        alert("El total a pagar es $" + total);
    }
}

function validarMaterial(material){
    return llaveros1.some( (el) => el.material.toLowerCase()=== material.toLowerCase())
}

function materialLlaveros(){
    let materialLlavero= prompt("De que material quisieras tu/s llavero/s  \n*acrilico \n*madera \n*metal")

    while(!validarMaterial(materialLlavero)){
        alert("Ingresaste un material de llaveros invalido, porfavor vuelva a ingresar otro.")
        materialLlavero= prompt("De que material quisieras tu/s llavero/s  \n*acrilico \n*madera \n*metal")

    }
    const llaveroEncontrado = llaveros1.find((el)=>el.material.toLowerCase()===materialLlavero.toLowerCase())

    return{materialLlavero,llaveroEncontrado}

    
}

function personalizado(){
    const frase = prompt("¿Qué te gustaría que digan tu/s llavero/s?");
    const dije = prompt("¿Quisieras que tenga/n dije? (son de regalo) \n*si\n*no");

    let dijeSiNo;
    if (dije === 'si') {
        dijeSiNo = "Con dije";
    } else {
        dijeSiNo = "Sin dije";
    }

   return { frase, dijeSiNo};
}

function findeCompra(cantidad){
    const {materialLlavero,llaveroEncontrado}=materialLlaveros();
    const personalizacion=personalizado();

    alert("* Cantidad de llaveros: " + cantidad + "\n* Dije/s: " + personalizacion.dijeSiNo + "\n* Frase: " + personalizacion.frase + "\n* Material: " + materialLlavero);

    let total = calcularprecio(cantidad, llaveroEncontrado.valor);
        total = descuento(total);
        totalApagar(total); 
    alert("Gracias por confiar en nosotros!!! \n Moly Cortelaser.")
}


//Inicio del programa

alert ("Bienvenido/a, nosotros somos 'Moly Cortelaser', nos especializamos en la venta de llaveros personalizados.");

let opcion = parseInt(prompt("¿En qué podemos ayudarte?\n* Ingresa '1' si quieres un llavero.\n* Ingresa '2' si quieres dos.\n* Ingresa '3' si quieres más de dos llaveros."));
if (opcion === 1 || opcion === 2 || opcion === 3 ){
    let cantidad=0 
    switch(opcion){
        case 1:
            cantidad=1
            break; 
        case 2:  
            cantidad=2
            break;
        case 3:
           let opcion3;
            do {
                opcion3 = parseInt(prompt("Ingrese el número de llaveros que quiere encargar. (Mayor a dos unidades)"));
                if (opcion3 <= 2) {
                    alert("Por favor, ingrese un número mayor a 2.");
                }
            } while (opcion3 <= 2);
            cantidad = opcion3;
            break;
    }  
    findeCompra(cantidad);
}else{
    alert("El numero que ingresaste es incorrecto, por favor ingrese 1, 2 o 3")
  
}