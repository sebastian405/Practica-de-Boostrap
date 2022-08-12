let form = document.getElementById('form-products');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let precio = document.getElementById('precio');
    let lista = document.getElementById('list-products');

    let div = document.createElement('div');
    div.classList.add('row')
    div.classList.add('mb-1')
    div.innerHTML = `
    
    <div class="card text-center col-md-11">
        <div class="card-body font-italic">
             <b>Descripcion: </b>${descripcion.value}
             <b>Cantidad: </b>${cantidad.value}
            <b>Precio: </b>${precio.value}
        </div>
    </div>
    <button
           class="btn btn-danger text-center col-md-1" name="delete">
           <i class="fa-solid fa-trash-can"></i>
     </button>
    `;
    if(descripcion.value!="" && precio.value!="" && cantidad.value!=""){
        lista.appendChild(div);
        mensaje('Producto cargado exitosamente','success');
        form.reset();
    }
});

let borrar = document.querySelector(".row")
borrar.addEventListener("click", function(e){
    div = document.createElement("div");
    if (e.target.name === "delete"){
        e.target.parentElement.remove();
        mensaje('Producto eliminado','danger');
    }
    setTimeout(() => {
        div.remove();
    }, 4000);
});
    
const mensaje = function(msj, color){

    app = document.querySelector("#app");
    container = document.querySelector(".container");
    div = document.createElement("div");
    
    div.innerHTML = `
        <div class="alert alert-${color} mt-5 font-italic" role="alert">${msj}</div>
    `
    container.insertBefore(div, app);
    setTimeout(() => {
        div.remove();
    }, 4000);
}

   