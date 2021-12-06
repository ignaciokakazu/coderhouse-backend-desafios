import {ProductoInterface, NewProductoInterface} from '../models/products/productos.interfaces';
import {MongoAtlas} from '../services/mongoDb';
import { Schema, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import {productsSchema} from '../models/products/DAO/mongodb';


const connection = MongoAtlas.getConnection();
const productosModel = connection.model<ProductoInterface>('producto', productsSchema);
const productosTC = composeWithMongoose(productosModel)

export const ProductsQuery = {
  productsById: productosTC.getResolver('findById'),
  productsByIds: productosTC.getResolver('findByIds'),
  productsOne: productosTC.getResolver('findOne'),
  productsMany: productosTC.getResolver('findMany'),
  productsCount: productosTC.getResolver('count'),
  productsConnection: productosTC.getResolver('connection'),
  productsPagination: productosTC.getResolver('pagination'),
};

export const ProductsMutation = {
  productsCreateOne: productosTC.getResolver('createOne'),
  productsCreateMany: productosTC.getResolver('createMany'),
  productsUpdateById: productosTC.getResolver('updateById'),
  productsUpdateOne: productosTC.getResolver('updateOne'),
  productsUpdateMany: productosTC.getResolver('updateMany'),
  productsRemoveById: productosTC.getResolver('removeById'),
  productsRemoveOne: productosTC.getResolver('removeOne'),
  productsRemoveMany: productosTC.getResolver('removeMany'),
};


/* EJEMPLO QUERY, MUTATION 

{
  	productsOne {
  	  nombre
  	  descripcion
  	  timestamp
  	} 
}
  
  mutation {
    productsCreateOne(record: {
      nombre: "productoCreadoConGraphQl",
      descripcion: "descripdescripcionGraphQl",
      codigo: "GQL",
      foto: "holaholhoa",
      precio: 500,
      stock: 120,
      timestamp: "algun dia"    
    }) {
      record {
        nombre
      }
    }
  }

  */