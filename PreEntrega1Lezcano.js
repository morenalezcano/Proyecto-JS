//Mi codigo se trata sobre una empresa que vende llaveros.//

class Llaveros {
    constructor(material, valor, stock) {
        this.material = material;
        this.valor = valor;
        this.stock = stock;
    }
}

const formLlavero = document.getElementById('form-llaveros');
const detallesDiv = document.getElementById('detalles');
const totalDiv = document.getElementById('total');

async function obtenerDatosDeAPI() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Error en la red');
        const data = await response.json();
        return data.llaveros;
    } catch (error) {
        console.error("Error al obtener los datos: ", error);
        return [];
    }
}

formLlavero.addEventListener('submit', async (e) => {
    e.preventDefault();

    const cantidad = parseInt(document.getElementById('cantidad').value);
    const material = document.getElementById('material').value;
    const frase = document.getElementById('frase').value || "Sin frase";
    const dije = document.getElementById('dije').value === 'si' ? "Con dije" : "Sin dije";

    const llaveros = await obtenerDatosDeAPI();
    const llaveroEncontrado = llaveros.find(el => el.material === material);

    if (!llaveroEncontrado) {
        alert("Material no encontrado.");
        return;
    }

    let total = calcularPrecio(cantidad, llaveroEncontrado.valor);
    const totalConDescuento = aplicarDescuento(total);
    const descuentoAplicado = Math.floor(total - totalConDescuento);

    detallesDiv.innerHTML = `
        <p><strong>Cantidad de llaveros:</strong> ${cantidad}</p>
        <p><strong>Material:</strong> ${material.charAt(0).toUpperCase() + material.slice(1)}</p>
        <p><strong>Frase:</strong> ${frase}</p>
        <p><strong>Dije:</strong> ${dije}</p>
    `;
    
    totalDiv.innerHTML = `<p><strong>Total a pagar:</strong> $${totalConDescuento}</p>`;

    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: `Descuento aplicado: $${descuentoAplicado}. Total a pagar: $${totalConDescuento}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});

function calcularPrecio(cantidad, precioUnidad) {
    return precioUnidad * cantidad;
}

function aplicarDescuento(total) {
    if (total > 20000) {
        return total * 0.80; 
    } else if (total > 5000) {
        return total * 0.90; 
    }
    return total;
}
