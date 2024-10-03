//Mi codigo se trata sobre una empresa que vende llaveros.//

class Llaveros {
    constructor(material, valor, stock) {
        this.material = material;
        this.valor = valor;
        this.stock = stock;
    }
}


const llaveros1 = [
    new Llaveros("acrilico", 350, 1000),
    new Llaveros("madera", 300, 200),
    new Llaveros("metal", 500, 800)
];

const formLlavero = document.getElementById('form-llaveros');
const detallesDiv = document.getElementById('detalles');
const totalDiv = document.getElementById('total');


formLlavero.addEventListener('submit', (e) => {
    e.preventDefault();

    const cantidad = parseInt(document.getElementById('cantidad').value);
    const material = document.getElementById('material').value;
    const frase = document.getElementById('frase').value || "Sin frase";
    const dije = document.getElementById('dije').value === 'si' ? "Con dije" : "Sin dije";

    // Busco el llavero seleccionado
    const llaveroEncontrado = llaveros1.find(el => el.material === material);

    // Almacena en localStorage
    localStorage.setItem('material', material);
    localStorage.setItem('cantidad', cantidad);
    localStorage.setItem('frase', frase);
    localStorage.setItem('dije', dije);

    detallesDiv.innerHTML = `
        <p><strong>Cantidad de llaveros:</strong> ${cantidad}</p>
        <p><strong>Material:</strong> ${material.charAt(0).toUpperCase() + material.slice(1)}</p>
        <p><strong>Frase:</strong> ${frase}</p>
        <p><strong>Dije:</strong> ${dije}</p>
    `;

    
    let total = calcularprecio(cantidad, llaveroEncontrado.valor);
    total = descuento(total);

    
    totalDiv.innerHTML = `<p><strong>Total a pagar:</strong> $${total}</p>`;
});


function calcularprecio(cantidad, precioUnidad) {
    return precioUnidad * cantidad;
}


function descuento(total) {
    if (total > 20000) {
        return total * 0.80; 
    } else if (total > 5000) {
        return total * 0.90; 
    }
    return total;
}