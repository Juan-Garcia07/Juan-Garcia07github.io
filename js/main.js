// PRODUCTOS
const productos = [
    // Bonicessote
    {
        id: "misterio-01",
        titulo: "MISTERIO 10 Pzas",
        imagen: "./img/bonicessote/misterio.jpg",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 95
    },
    {
        id: "galactico-02",
        titulo: "GALACTICO 10 Pzas",
        imagen: "./img/bonicessote/galactico.jpg",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 90
    },
    {
        id: "zombie-03",
        titulo: "ZOMBIE 10 Pzas",
        imagen: "./img/bonicessote/zombie.jpg",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 90
    },
    {
        id: "chamoyada-04",
        titulo: "CHAMOYADA 10 Pzas",
        imagen: "./img/bonicessote/chamoyada.jpg",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 90
    },
    {
        id: "elektr-05",
        titulo: "ELEKTR 10 Pzas",
        imagen: "./img/bonicessote/elektr.jpg",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 80
    },
    {
        id: "pack-05",
        titulo: "PACK LIMONSOTE, CEREZOTA, MANGOTE 30 Pzas",
        imagen: "./img/bonicessote/pack.png",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 270
    },
    {
        id: "stranger-05",
        titulo: "STRANGER 10 Pzas",
        imagen: "./img/bonicessote/stranger.jpg",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 90
    },
    {
        id: "impostor-05",
        titulo: "IMPOSTOR 10 Pzas",
        imagen: "./img/bonicessote/impostor.png",
        categoria: {
            nombre: "Bonicessote",
            id: "bonicessote"
        },
        precio: 90
    },
    // Sencillo
    {
        id: "fresa-01",
        titulo: "BONICE FRESA 10 Pzas",
        imagen: "./img/sencillo/fresa.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 60
    },
    {
        id: "limon-02",
        titulo: "BONICE LIMON 10 Pzas",
        imagen: "./img/sencillo/limon.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 60
    },
    {
        id: "mango-03",
        titulo: "BONICE MANGO 10 Pzas",
        imagen: "./img/sencillo/mango.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 60
    },
    {
        id: "maracuya-04",
        titulo: "BONICE MARACUYA 10 Pzas",
        imagen: "./img/sencillo/maracuya.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 60
    },
    {
        id: "parchita-05",
        titulo: "BONICE PARCHITA 10 Pzas",
        imagen: "./img/sencillo/parchita.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 60
    },
    {
        id: "piña-06",
        titulo: "BONICE PIÑA 10 Pzas",
        imagen: "./img/sencillo/piña.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 40
    },
    {
        id: "sandia-07",
        titulo: "BONICE SANDIA 10 Pzas",
        imagen: "./img/sencillo/sandia.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 50
    },
    {
        id: "tamarindo-08",
        titulo: "BONICE TAMARINDO 10 Pzas",
        imagen: "./img/sencillo/tamarindo.jpg",
        categoria: {
            nombre: "Sencillo",
            id: "sencillo"
        },
        precio: 70
    },
    // DOBLE
    {
        id: "berryhot-01",
        titulo: "BONICE BERRYHOT 12 Pzas",
        imagen: "./img/doble/berryhot.jpg",
        categoria: {
            nombre: "Doble",
            id: "doble"
        },
        precio: 100
    },
    {
        id: "mangochamoy-02",
        titulo: "BONICE MANGO-CHAMOY 12 Pzas",
        imagen: "./img/doble/mangochamoy.jpg",
        categoria: {
            nombre: "Doble",
            id: "doble"
        },
        precio: 100
    },
    {
        id: "morafresa-03",
        titulo: "BONICE MORA-FRESA 12 Pzas",
        imagen: "./img/doble/morafresa.jpg",
        categoria: {
            nombre: "Doble",
            id: "doble"
        },
        precio: 100
    },
    {
        id: "surtidos-04",
        titulo: "BONICE SURTIDOS 12 Pzas",
        imagen: "./img/doble/surtidos.jpg",
        categoria: {
            nombre: "Doble",
            id: "doble"
        },
        precio: 100
    },
    {
        id: "sustidos-05",
        titulo: "BONICE CI-DULCE 12 Pzas",
        imagen: "./img/doble/sustidos.jpg",
        categoria: {
            nombre: "Doble",
            id: "doble"
        },
        precio: 100
    },
   
    //TRIANGULOS
    {
        id: "chocolate-01",
        titulo: "CHOCOLATE 10 Pzas",
        imagen: "./img/triangulito/chocolate.jpg",
        categoria: {
            nombre: "Triangulitos",
            id: "triangulitos"
        },
        precio: 70
    },
    {
        id: "galleta-02",
        titulo: "GALLETA 10 Pzas",
        imagen: "./img/triangulito/galleta.jpg",
        categoria: {
            nombre: "Triangulitos",
            id: "triangulitos"
        },
        precio: 70
    },
    {
        id: "arequipe-02",
        titulo: "AREQUIPE 10 Pzas",
        imagen: "./img/triangulito/arequipe.jpg",
        categoria: {
            nombre: "Triangulitos",
            id: "triangulitos"
        },
        precio: 70
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
       
   
}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
           
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
         
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        

        
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}




