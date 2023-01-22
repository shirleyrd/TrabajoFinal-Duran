/**Constructor para carga de cliente**/

class Cliente {
    constructor(nombre, apellido, telefono, email, servicios) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.servicios = servicios;
    }
}

const clientes = [];

if (localStorage.getItem(clientes)) {
    let cliente =JSON.parse(localStorage.getItem("clientes"));
    for (let i = 0; i < cliente.lenght; i++) {
        clientes.push(cliente[i]);
    }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    cargaCliente();
});

/**Funciones**/






function cargaCliente () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const servicios = document.getElementById("servicios").value;    
    const nuevoCliente = new Cliente(nombre, apellido, telefono, email, servicios);
    clientes.push(nuevoCliente);
    //Se crgan los datos del cliente en locaStorage//
    localStorage.setItem("clientes", JSON.stringify(clientes));
    formulario.reset();     

}


const datosCargadosClientes = document.getElementById("datosCargadosCliente");
const botonCargados = document.getElementById("botonCargados");

botonCargados.addEventListener("click", () => {
    informacionCliente ();
});

function selectServicios(){
    const servicios = document.getElementById("servicios").checked;
}

function informacionCliente() {
    datosCargadosClientes.innerHTML = "";
    clientes.forEach((cliente) => {
        const div=document.createElement("div");
        div.innerHTML = `
                          <div>
                              <p> Nombre Cliente : ${cliente.nombre}</p>
                              <p> Apellido Cliente : ${cliente.apellido}</p>                              
                              <p> Telefono Cliente : ${cliente.telefono}</p>
                              <p> Email Cliente : ${cliente.email}</p>
                              <p> Servicio Realizado: ${cliente.servicios}</p>                            
                          </div>
                        `;
      datosCargadosClientes.appendChild(div);                  

    });
}
