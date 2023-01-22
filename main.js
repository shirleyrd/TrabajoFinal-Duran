/**Constructor para carga de cliente**/

class Cliente {
    constructor(nombre, apellido, telefono, email, servicios, observaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.servicios = servicios;
        this.observaciones = observaciones;
    }
}

const clientes = [];

if (localStorage.getItem("clientes")) {
    let cliente =JSON.parse(localStorage.getItem("clientes"));
    for (let i = 0; i < cliente.lenght; i++) {
        clientes.push(cliente[i]);
    }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {    
    e.preventDefault();
    cargaCliente();
    Swal.fire(
        'Datos cargados correctamente',
        'datos almacenados',
        'success'
      );
    
    
});

/**Funciones**/


function cargaCliente () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const servicios = document.getElementById("servicios").value;
    const observaciones = document.getElementById("observaciones").value;     
    const nuevoCliente = new Cliente(nombre, apellido, telefono, email, servicios, observaciones);
    clientes.push(nuevoCliente);
    //Se cargan los datos del cliente en locaStorage//
    localStorage.setItem("clientes", JSON.stringify(clientes));
    formulario.reset();     

}


const datosCargadosClientes = document.getElementById("datosCargadosCliente");
const botonCargados = document.getElementById("botonCargados");

botonCargados.addEventListener("click", () => {
    informacionCliente ();
});



function informacionCliente() {
    datosCargadosClientes.innerHTML = "";
    clientes.forEach((cliente) => {

        const div = document.createElement("div");
        div.innerHTML = `
                          <div>
                              <p> Nombre Cliente : ${cliente.nombre}</p>
                              <p> Apellido Cliente : ${cliente.apellido}</p>                              
                              <p> Telefono Cliente : ${cliente.telefono}</p>
                              <p> Email Cliente : ${cliente.email}</p>
                              <p> Servicio Realizado: ${cliente.servicios}</p>
                              <p> Observaciones: ${cliente.observaciones}</p>                            
                          </div>
                        `;
      datosCargadosClientes.appendChild(div);                  

    });
}

