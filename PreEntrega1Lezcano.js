//Mi primer preentrega se va a tratar sobre una empresa que vende llaveros.//

alert ("Bienvenido/a, nosotros somos 'Moly Cortelaser', nos especializamos en la venta de llaveros personalizados.");

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

function personalizado(){
    const frace = prompt("¿Qué te gustaría que digan tus llaveros?");
    const dije = prompt("¿Quisieras que tengan algún dije? (son de regalo) \n*si\n*no");

    let dijeSiNo;
    if (dije === 'si') {
        dijeSiNo = "Con dije";
    } else {
        dijeSiNo = "Sin dije";
    }

    return { frace, dijeSiNo };
}

function compra(){
    const precioUnidad = 350;

    for (let i=0;i< 1; i++) {
        const opcion = parseInt(prompt("¿En qué podemos ayudarte?\n* Ingresa '1' si quieres un llavero.\n* Ingresa '2' si quieres dos.\n* Ingresa '3' si quieres más de dos llaveros.\n* Ingresa '4' si deseas salir."));

        let cantidad = 0;
        let frace = '';
        let dijeSiNo = '';

        if (opcion === 1) {
            cantidad = 1;
        } else if (opcion === 2) {
            cantidad = 2;
        } else if (opcion === 3) {
            const opcion3 = parseInt(prompt("Ingrese el número de llaveros que quiere encargar. (Mayor a dos unidades)"));
            cantidad = opcion3;
        } else if (opcion === 4) {
            break;
        } else {
            alert("El número que ingresaste no es válido. Por favor, ingresa un número válido '1', '2', '3' o '4'.");
            continue;
        }
        
        let total = calcularprecio(cantidad, precioUnidad);
        total = descuento(total);

        const { frace: fracePersonalizado, dijeSiNo: dijePersonalizado } = personalizado();
        frace = fracePersonalizado;
        dijeSiNo = dijePersonalizado;

        alert("* Cantidad de llaveros: " + cantidad + "\n* Dije/s: " + dijeSiNo+ "\n* Frace: "+frace);
        totalApagar(total); 
        alert("Gracias por confiar en nosotros!!! \n Moly Cortelaser.")
    }
}

compra();
