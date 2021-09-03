import express from 'express';
import { Login } from '../models/ClassLogin.js';
import {Productos} from '../models/ClassProductos.js';
//import {middleAdm} from './middleware.js';

const router = express.Router();
let admin=false;
/*hacer mensajes de error*/

router.get('/listar', async (req,res)=> {    
    res.json(await Productos.readProducto());
})

router.get('/listar/:search', async (req, res)=> {
    res.json(await Productos.search(req.params.search));
})

// const adm = (user, password) => {
//     admin = Login.validacion(user, password);
// }

router.post('/login', (req, res) => {
    admin = Login.validacion(req.body)
    console.log(admin)
    admin? res.json({ url: "http://localhost:8080/admin/index" }) : res.json({url: "http://localhost:8080/admin/error"});
});

const middleAdmin = (request, response, next) => {
    console.log("middleware admin")
    console.log(admin)
    admin? next() : response.status(403).json({error: "Error de autenticación"})
}

router.use(middleAdmin) //lo de acá abajo es afectado por el middleWare

router.post('/agregar', async (req,res)=> {
    //solo administradores
    console.log("Admin del agregar")
    console.log(admin)
    res.json(await Productos.addProducto(req.body))
})

router.put('/actualizar/:id', async (req,res)=> {
    //solo administradores
    console.log("Admin del actualizar")
    console.log(admin)
    res.json(await Productos.updateProducto(req.params.id, req.body))
})

router.delete('/borrar/:id', async (req,res)=> {
    //solo administradores
    console.log("Admin del delete")
    console.log(admin)
    res.json(await Productos.deleteProducto(req.params.id))
})

/*
{
    "product": {"nombre": "nombre1",
    "descripcion": "descripcion2",
                "codigo": "codigo",
            "foto": "req.foto",
            "precio": 1234,
            "stock": 10}
}

{
    "user": {"user": "admin",
    "password": "1234"}
}

*/

/*
{
    "user": {"user": "admin1234",
    "password": "1234"},
        "product": {"nombre": "nombre1",
    "descripcion": "descripcion2",
                "codigo": "codigo",
            "foto": "req.foto",
            "precio": 1234,
            "stock": 10}
}

*/

export default router;