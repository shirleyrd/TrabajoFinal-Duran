const listaServicios = document.getElementById("listaServicios");

fetch("./servicios.json")
   .then(response => response.json())
   .then(profesionales => {      
        mostrarServicios(servicios);
    })
       
    
   
function mostrarServicios (servicios) {
   servicios.forEach(servicio => {
        const checkbox = document.createElement("input");
        const li = document.createElement("li");       
        checkbox.type ="checkbox"
        checkbox.value = servicio;        
        li.innerText = servicio;        
        listaProfesionales.append(li);
        listaProfesionales.append(checkbox);
    })
}

