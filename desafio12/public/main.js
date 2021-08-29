const socket = io.connect();

function addMessage(e) {
  console.log('LLAMANDO A ADD MESSAGE');
  var productoNuevo = {
    title: document.getElementById('title').value,
    price: document.getElementById('price').value,
    thumbnail: document.getElementById('thumbnail').value,
  };

  socket.emit('productoNuevo', productoNuevo);
  return false;
}

function render(data) {
    let html=`<table class='table'>
                <tr>
                    <thead>
                        <th scope='col'>ID</th>
                        <th scope='col'>Producto</th>
                        <th scrope='col'>Precio</th>
                        <th scope='col'>Imagen</th>
                    </thead>
                </tr>`;
    data.forEach((producto)=> {
        html += `<tr>
                        <td>${producto.id}</td>
                        <td>${producto.title}</td>
                        <td>${producto.price}</td>
                        <td><img src='${producto.thumbnail}' width="50px"></td>
                    </tr>`
    })

    html += '</table>'
  document.getElementById('tablaProductos').innerHTML = html;  
}

socket.on('productos',  (data) => {
  console.log('RECIBI MENSAJE');
  render(data);
});

