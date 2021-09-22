import * as admin from 'firebase-admin';
import { NewProductoInterface } from '../../productos.interfaces';
import * as serviceAccount from './firebase.json';

export class ProductosFirebaseDAO {//implements ProductBaseClass {
  db: any;

  constructor() {

    const params = {
        type: serviceAccount.type,
        projectId: serviceAccount.project_id,
        privateKeyId: serviceAccount.private_key_id,
        privateKey: serviceAccount.private_key,
        clientEmail: serviceAccount.client_email,
        clientId: serviceAccount.client_id,
        authUri: serviceAccount.auth_uri,
        tokenUri: serviceAccount.token_uri,
        authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
        clientC509CertUrl: serviceAccount.client_x509_cert_url
      }

    admin.initializeApp({
        credential: admin.credential.cert(params)
    });
    this.db = admin.firestore();
  }

  async getProductosAll() {
    const resultado:any = await this.db.collection('productos').get();
    const docs:any = resultado.docs;
    console.log(docs);
    // const output:any = docs.map((aDoc:any) => ({
    //     id: aDoc.data().id,
    //     nombre: aDoc.data().nombre,
    //     precio: aDoc.data().precio,
    //     stock: aDoc.data().stock,
    //     descripcion: aDoc.data().descripcion,
    //     foto: aDoc.data().foto,
    //     thumbnail: aDoc.data().thumbnail,
    //     timestamp: aDoc.data().timestamp
    // }))
    const output:string="hola"
    return output;
  }

  async getProductosById(id:number) {
    const aDoc:any = await this.db.collection('productos').get(id);
    const docs:any = aDoc.docs;

    return ({
        id: docs.data().id,
        nombre: docs.data().nombre,
        precio: docs.data().precio,
        stock: docs.data().stock,
        descripcion: docs.data().descripcion,
        foto: docs.data().foto,
        thumbnail: docs.data().thumbnail,
        timestamp: docs.data().timestamp        
    });
  }

  async insertProducto(data: any) {
    let size:number = 0;
    this.db.collection('productos').get().then((snap:any) => {
        size = snap.size // will return the collection size
      });
    
    const id :number = size++;

    const obj = {
        id: id,
        nombre: data.nombre,
        descripcion: data.descripcion,
        codigo: data.codigo,
        foto: data.foto,
        precio: data.precio,
        stock: data.stock,
        timestamp: new Date()
    }

    const userDocument:any = this.db.doc();
    await userDocument.create(data);
    
    return id;
  }

  async updateProducto(id: number, newProductData: NewProductoInterface) {
    //return this.productos.findByIdAndUpdate(id, newProductData);
    // const miDoc = this.db.collection('productos').doc(id);
    // return this.productos.findOneAndUpdate(filter, newProductData);
    return id;
  }

  async deleteProducto(id: number) {
    //   const filter = {id:id}
    // await this.productos.deleteOne(filter);
    return id;
  }

//   async query(options: ProductQuery): Promise<ProductI[]> {
//     let query: ProductQuery = {};

//     if (options.nombre) query.nombre = options.nombre;

//     if (options.precio) query.precio = options.precio;

//     return this.productos.find(query);
//   }
}