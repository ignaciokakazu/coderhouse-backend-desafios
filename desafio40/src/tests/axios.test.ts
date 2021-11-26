import axios from 'axios';

class axiosTest {

  constructor() {

  }

  getProductos() {
      axios({
          method: 'get',
          url: '/api/productos/listar',
          responseType: 'json'
        })
          .then(function (response) {
            // response.data(fs.createWriteStream('listar.txt'))
            return response.data
          });
    }
  }

export const ax = new axiosTest();
