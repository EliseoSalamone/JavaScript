
let usuario = "EliseoSalamone";

let Password = "Pass1234";

let i = 0;

while( i < 3){
    i++;
    let UsuarioIngresado = prompt("Ingrese su nombre de Usuario")
    let PasswordIngresado= prompt("Ingrese su contrasena")

    if (UsuarioIngresado == usuario && PasswordIngresado == Password){
        console.log("Bienvenido " + usuario);
        break;
    }

    else {
        console.log("Usuario incorrecto. Te quedan " + (3 - i) + "intentos");
    }

}
const productos = [
    {nombre: "autos", precio: 100 },
    {nombre: "motos", precio: 50 },
    {nombre: "ropa", precio: 25 },
    {nombre: "tecnologia", precio: 10 },
    {nombre: "viajes", precio: 150 },
    {nombre: "casas", precio: 1000 },
    {nombre: "accesorios", precio: 20 },
];
let carrito = []

let seleccion = prompt("Hola desea comprar algun producto si o no")

while(seleccion != "si" && seleccion !="no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("Hola desea comprar algun producto si o no")
}

if(seleccion == "si"){
    alert("estas es nuestras listas de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if( seleccion == "no"){
    alert(" gracias por venir, vuelva pronto")
}

while( seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "autos" || producto == "motos" || producto == "ropa" || 
    producto == "tecnologia" || producto == "viajes" || producto == "casas" ||
    producto == "accesorios" ){
        switch(producto){
            case "autos":
                precio = 100;
                break;
            case "motos":
                precio = 50;
                break;
            case "ropa":
                precio = 25;
                break;
            case "tecnologia":
                precio = 10;
                break;
            case "viajes":
                precio = 150;
                break;
            case "casas":
                precio = 1000;
                break;        
            case "accesorios":
                precio = 20;
                break;    
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))  
    carrito.push({producto, unidades, precio})  
    }else{
        aler("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando?")

    while(seleccion === "no"){
        alert("Disfrute su compra, hasta luego")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
            })
    break;       
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`);

