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

