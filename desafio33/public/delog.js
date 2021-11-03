async function delog() {
  
    let url = new URL('http://localhost:8080/login/clear')
      
    fetch(url)
      .then(response=>response.json())
      .then((data)=>{
        if (data.msg === 'ok') {
          alert('hasta luego ' + data.user);
          setTimeout(()=>{window.location.replace('http://localhost:8080')}, 2000);
          //redirect
        } else {
          alert('No se pudo cerrar sesión. Vuelva a intentarlo más tarde');
        }
      })
      
  }
  
  const botonDelog = document.getElementById('delog');
  botonDelog.addEventListener('click', delog);

  const botonControla = document.getElementById('controla');
  botonControla.addEventListener('click', control);

async function control() {

  let url = new URL('http://localhost:8080/login/get')
      
  fetch(url)
    .then(response=>response.json())
    .then((data)=>{
      console.log(data.msg)
      if (data.msg != 'ok') {
        alert('chau')
        setTimeout(()=>{window.location.replace('http://localhost:8080')}, 1000);
        //redirect
    } else {
      alert('está, todo bien')
    }
  })

}

  window.onload = async function() {
    await control()
    
  }

