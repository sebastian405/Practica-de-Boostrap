let form = document.getElementById('form-products');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let precio = document.getElementById('precio');
    let lista = document.getElementById('list-products');

    let div = document.createElement('div');
    div.innerHTML = `
    
    <div class="card text-center row">
        <div class="card-body col-11">
             <b>Descripcion: </b>${descripcion.value}
             <b>Cantidad: </b>${cantidad.value}
            <b>Precio: </b>${precio.value}
        </div>
            <div class="col-12">
                 <a href="#" class="btn btn-danger btn-block" name="delete">
                        Borrar
                 </a>
            </div>
     </div>
    `;
    lista.appendChild(div);
});