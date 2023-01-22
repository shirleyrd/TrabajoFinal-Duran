let clientesAnteriores =  [];

function fetchClientes() {
   fetch("./clientes.json")
   .then(response => response.json ())
   .then(data => {
      data.forEach(nombreCliente => {
         nombreCliente.innerText = cliente.nombre;
         document.body.appendChild(clientName);
         
      });
   });
   
}

   
