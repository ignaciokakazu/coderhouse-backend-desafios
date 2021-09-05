const socket = io.connect('http://localhost:8080')//, {forceNew: true});

function addPlayer(e) {
  const obj = {
    player: document.getElementById('player').value
  }

  socket.emit('addPlayer', obj);
  return false;
}


function addProduct(e) {
  console.log('LLAMANDO ');
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
                        <td>${producto.nombre}</td>
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

/* CHAT */
  //Connection / newConnection
const iniciar = () => {
  const nombre = document.getElementById("nombre").value;
  
  if (!nombre) {
    alert("No hay nombre");
    return;
  }
  
  const chatDatos = document.getElementById("chatDatos");
  chatDatos.style.display = "none";

  const chatPanel = document.getElementsByClassName("chatPanel")
  chatPanel[0].style.display = "block";

  socket.emit('chatConnect', nombre);
}

socket.on('chatConnectMessage', (data)=> {
  const chat = document.getElementById("chat");
  console.log(data);
  const p = document.createElement("p");
  p.innerHTML = `${data.username}: ${data.message}`;
  chat.appendChild(p);
  
  chat.scrollIntoView();
  
})

//emitMensaje / newConnection
const enviar = () => {
  const mensajeInput = document.getElementById("newMessage");
  const nombre = document.getElementById("nombre").value;
  const mensaje = mensajeInput.value;

  const objMsg = {
    message: mensaje,
    username: nombre,
  }
  
  mensajeInput.value = "";
  socket.emit('emitNewMessage', objMsg);
}

socket.on('receiveNewMessage', (data)=> {
  const chat = document.getElementById("chat");
  const p = document.createElement("p");
  p.innerHTML = `<span style='color:blue;font-weight:bold;'>
                      ${data.username}
                  </span> - 
                  <span style='color:brown;'>
                      ${data.timestamp}
                  </span>: 
                  <span style='color:green;font-style:italic;'>
                      ${data.message}
                  </span>`;
  chat.appendChild(p);
    
})

const desconectar = () => {
  const nombre = document.getElementById("nombre").value;
  socket.emit('chatDisconnect', nombre);

}

socket.on('chatDisconnectMessage', (data)=> {
  const chat = document.getElementById("chat");
  const p = document.createElement("p");
  p.innerHTML = `<span style='color:brown;'>
                      ${data.timestamp}
                  </span>: 
                  <span style='color:green;font-style:italic;'>
                      ${data.message}
                  </span>`;
  chat.appendChild(p);
  const nombre = document.getElementById('nombre').value;
    //ocultar chatpanel
    if (data.name == nombre) {
      const chatPanel = document.getElementsByClassName("chatPanel");
      chatPanel[0].style.display = "none";
      const chatContainer = document.getElementsByClassName("chatContainer");
      chatContainer[0].innerHTML = "<p>Gracias por utilizar el chat</p>";
      console.log("desconetado")
  }
})
