// url=https://www.deprati.com.ec/playstation-5-sony-slim-cfi-1215b-edicion-digital-ssd-825-gb/p/997S30364915910
// Laboratorio

let numCodigo = 494887241910; // int
let nombreObjeto = "PlayStation 5"; // string
let detelleObjeto = {
    "modelo" : "Slim CFI 1215B",
    "estado" : "Activo",
    "precio" : 979.00,
    "diferido_24_meses" : 49.63,
    "diferido_36_meses" : 34.23,
    "Tipo_memoria" : "GDDR6 16 GB",
    "Capacidad_Memoria" : 448,
    "CPU" : "x86-64-AMD Ryzen Zen 2"
}; // object

// Mostrar en consola
console.log("===== Información del Producto =====");
console.log("Número de Código:", numCodigo);
console.log("Nombre del Objeto:", nombreObjeto);

// Bucle para recorrer todos los campos del 
console.log("===== Detalles Técnicos =====");
for (let clave in detelleObjeto) {
    console.log(`${clave}: ${detelleObjeto[clave]}`);
}

// Condicional
if (detelleObjeto.estado === "Activo") {
    console.log("El producto está disponible para la venta.");
} else {
    console.log("El producto no está disponible.");
}

// Condicional
if (detelleObjeto.precio < 1000) {
    console.log("¡Buena oferta! El precio es menor a $1000.");
} else {
    console.log("Precio elevado, considera el pago diferido.");
}

// Costo total
console.log("===== Proyecciones de Pago =====");
let meses = [24, 36];

for (let i = 0; i < meses.length; i++) {
    let claveDiferido = `diferido_${meses[i]}_meses`;
    let valorMensual = detelleObjeto[claveDiferido];
    let total = valorMensual * meses[i];
    console.log(`Total a pagar en ${meses[i]} meses: $${total.toFixed(2)} (${valorMensual.toFixed(2)} mensual)`);
}
