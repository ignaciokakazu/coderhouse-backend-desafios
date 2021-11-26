import { assert } from 'console';
import {ax} from './axios.test';

describe('prueba con axios', ()=> {

    it('ejecuto api/productos/listar', ()=> {
        const resultado = ax.getProductos();
        const assert = chai.assert;
        assert.typeOf(resultado, 'object')
    })
})
