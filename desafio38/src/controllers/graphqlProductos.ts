import {ProductoInterface, NewProductoInterface} from '../models/productos.interfaces';
import {MongoAtlas, MongoLocal} from '../services/mongoDb';
import { Schema, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import {productsSchema} from '../models/DAO/productos/mongodb';

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


