import { strict as assert } from 'assert';
// import {ax} from '../services/axios.test';
import axios from 'axios';
import {axiosFunc} from './axios';
import supertest from 'supertest';
import {app} from '../services/server';



describe('prueba con axios', ()=> {

    // it('pruebo que jest ande', ()=> {
    //     expect(1).toBe(2);
    // })

    // it('pruebo los endpoints con supertest', async ()=> {
    //     const api = supertest(app);
    //     return await api.get('/api/productos/listar');
        
    // })

    it('pruebo axiosFunc', async ()=> {
        const url = '/api/productos/listar';
        //prepare

        //mock de datos
        const expectedValue = [{"_id":"614a81044110e52a0702bf81","id":1,"nombre":"OsobucoModif","descripcion":"Descripcion osobuco","codigo":"Oso","foto":"foto","precio":50,"stock":10,"timestamp":"Tue Sep 21 2021 22:04:04 GMT-0300 (hora estándar de Argentina)","__v":0},{"_id":"614a810a4110e52a0702bf84","id":2,"nombre":"OsobucoModif","descripcion":"Descripcion osobuco","codigo":"Oso","foto":"foto","precio":300,"stock":10,"timestamp":"Tue Sep 21 2021 22:04:10 GMT-0300 (hora estándar de Argentina)","__v":0},{"_id":"619b37ad09dcbf4e394166e2","nombre":"productoCreadoConGraphQl","descripcion":"descripdescripcionGraphQl","codigo":"GQL","foto":"holaholhoa","precio":500,"stock":120,"timestamp":"algun dia","__v":0}];
        
        //el spyOn devuelve un objeto. Usa la función axios en el get y mockea los datos de arriba
        //usa la función de mentira miAxios para reemplazar el axiosFunc
        const miAxios = jest.spyOn(axios, 'get').mockImplementation(() => { 
          console.log('SE esta ejecutando mi funcion de mentira');
          return new Promise((resolve) => { //es importante que si la función original axiosFunc devuelve una promesa, esta función debería ser promesa
            resolve({
              data: expectedValue,
            });
          });
        });
    
        const result = await axiosFunc(url);
        console.log(result);
        expect(miAxios).toHaveBeenCalled(); //Verifica si se llame
        expect(miAxios).toHaveBeenCalledWith(url); //Verifica que se llamo pasando como args mi url
        expect(result).toEqual(expectedValue);
    })

    it('a+b debe ser igual a 3', ()=> {
        const a=1;
        const b=2;
        const c = a + b;
        const expected = 3;
        assert.equal(c, expected);
        //expect(c).toEqual(expected);
    });

    // it('prueba con axios get', async ()=> {
    //     // axios.defaults.baseURL = 'http://localhost:8080';
    //     const result = await axiosFunc('/api/productos/listar')
    //     console.log(result)
    // })  
});


