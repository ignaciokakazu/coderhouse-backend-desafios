const socket = io.connect('http://localhost:8080')//, {forceNew: true});


async function login() {
  const user = document.getElementById('user').value
  
  let url = new URL('http://localhost:8080/login/set')
    url.search = new URLSearchParams({
        user: user
  })

fetch(url)
  .then(response=>response.json())
  .then((data)=>{
    if (data.msg === 'ok') {
      window.location.replace('http://localhost:8080/login');
      //redirect
    } else {
      alert('Usuario erróneo. El usuario correcto es admin');
    }
  })
}

const botonLogin = document.getElementById('login');
botonLogin.addEventListener('click', login);

async function signup() {
  const user = document.getElementById('userReg').value;
  const password = document.getElementById('passwordReg').value;
  const email = document.getElementById('email').value;
  console.log(user, password, email)


   /* url.search = new URLSearchParams({
        user: user,
        password: password,
        email: email
  })*/

  fetch('http://localhost:8080/signup', {
    method: 'POST',
    body: JSON.stringify({
      user: user,
      password: password,
      email: email
    }),
    headers: {
      'Content-Type': 'application/json'
    }
    })
  .then(response=>response.json())
  .then((data)=>{
    if (data.msg === 'ok') {
      alert('Usuario creado')
      //redirect
    } else {
      alert(data.error);
    }
  })
}

const botonSignup = document.getElementById('register');
botonSignup.addEventListener('click', signup);

// async function postData(url = '', data = {}) {
//   // Opciones por defecto estan marcadas con un *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

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

  let email;
  let name;
  let surname;
  let age;
  let alias;
  let avatar
const iniciar = () => {
  email = document.getElementById("email").value;
  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  age = document.getElementById("age").value;
  alias = document.getElementById("alias").value;
  avatar = document.getElementById("avatar").value;

  if (!email || !name || !surname || !age || !alias || !avatar) {
    alert("Datos inválidos. Complete para continuar");
    return;
  }
  
  const chatDatos = document.getElementById("chatDatos");
  chatDatos.style.display = "none";

  const chatPanel = document.getElementsByClassName("chatPanel")
  chatPanel[0].style.display = "block";

  const objMsg = {
    email: email,
    name: name,
    surname: surname,
    age: age,
    alias: alias,
    avatar: avatar
  }
  socket.emit('chatConnect', objMsg);
}

// const author = new Schema.Entity('author', {}, { idAttribute: 'email' });

// const msg = new Schema.Entity(
//    'message',
//    {
//        author: author,
//    },
//    { idAttribute: '_id' }
//    );

socket.on('chatConnectMessage', (data)=> {
  const chat = document.getElementById("chat");
  console.log(data);
  const p = document.createElement("p");
  console.log(typeof data);

    // const msgesSchema = new Schema.Array(msg);
    // const denormalizeData = denormalize(
    //   data.result,
    //   msgesSchema,
    //   data.entities
    // )
  console.log(data.entities)
  for (let i = 0;i<data.result.length;i++) {
    
    //console.log(data.entities.message[data.result[i]]);

    p.innerHTML += `${data.entities.message[data.result[i]].author} - ${data.entities.message[data.result[i]].timestamp} - ${data.entities.message[data.result[i]].message}`;
  }
  //p.innerHTML = `${data.author.name} ${data.author.surname}: ${data.message}`;
  chat.appendChild(p);
  
  chat.scrollIntoView();
  
})

//emitMensaje / newConnection
const enviar = () => {
  const mensajeInput = document.getElementById("newMessage");
  const mensaje = mensajeInput.value;

  const objMsg = {
    author: {
      email: email,
      name: name,
      surname: surname,
      age: age,
      alias: alias,
      avatar: avatar
    },
    message: mensaje
  }
  console.log(objMsg);
  mensajeInput.value = "";
  socket.emit('emitNewMessage', objMsg);
}

socket.on('receiveNewMessage', (data)=> {
  const chat = document.getElementById("chat");
  const p = document.createElement("p");
  console.log(data);
  p.innerHTML = `<span style='color:blue;font-weight:bold;'>
                      ${data.author.name} ${data.author.surname}
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
  
  const objMsg = {
    email: email,
    name: name,
    surname: surname,
    age: age,
    alias: alias,
    avatar: avatar
  }

  socket.emit('chatDisconnect', objMsg);
  
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
  const nombre = document.getElementById('name').value;
    //ocultar chatpanel
    if (data.name == nombre) {
      const chatPanel = document.getElementsByClassName("chatPanel");
      chatPanel[0].style.display = "none";
      const chatContainer = document.getElementsByClassName("chatContainer");
      chatContainer[0].innerHTML = "<p>Gracias por utilizar el chat</p>";
      console.log("desconetado")
  }
})
