import dotenv from 'dotenv';
dotenv.config();

const venv = {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'user1234',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'RjPDXWOh3m4xsGad',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'cluster0.tc0bp.mongodb.net',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'ecommerce',
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'ecommerce',
};

export default venv;