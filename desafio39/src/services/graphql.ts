const { SchemaComposer } = require('graphql-compose');
const { ProductsQuery, ProductsMutation } = require('../controllers/graphqlProductos');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...ProductsQuery,
}); //si hay más de uno, puede ir acá

schemaComposer.Mutation.addFields({
  ...ProductsMutation,
});

export const graphQLMainSchema = schemaComposer.buildSchema();
