import config from '../config/config';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// const usersCollection = 'users';

const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         index:true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// /*pre es una especie de  middleware de mongoose
//   Se ejecuta antes del evento 'save'
//   en este caso, hashea el password
// */
// UserSchema.pre('save', async function (next) {
//   const user = this;
//   const hash = await bcrypt.hash(user.password, 10) 

//   this.password = hash;
//   next();
// });

// /*isValidPassword es un método para evitar hacer la query a la BD
//   bcrypt encripta y desencripta, y compara contra la BD
// */
// UserSchema.methods.isValidPassword = async function (password) {
//   const user = this;
//   const compare = await bcrypt.compare(password, user.password);

//   return compare
// };

// export const UserModel = mongoose.model('user', UserSchema);



const mensajesCollection = 'mensajes';

const mensajesSchema = new Schema({
    // author: [authorSchema],
    author:{ name: {type:String, required: true},
    surname: {type:String, required: true},
    email: {type:String, required: true},
    age: {type:Number, required: true},
    alias: {type:String, required: true},
    avatar: {type:String, required: true}
},
    message: {type: String, required: true},
    timestamp: { type: String, required: true} //currentTime: () => Math.floor(Date.now() / 1000) }
});

export const mensajesMongo = new mongoose.model(mensajesCollection, mensajesSchema);



const productosCollection = 'productos';

const productosSchema = new Schema({
    id: {type: Number, required: true, unique:true},
    // _id: {type:String, required:true, unique:true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    category_id: {type: Number, required: true},
    timestamp: {type: String, required: true}//{ currentTime: () => Math.floor(Date.now() / 1000) }
});

export const productosMongo = new mongoose.model(productosCollection, productosSchema);

( async () => {
    
  try {
    const URL = config.MONGO_ATLAS_URL;
    let rta = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("DB CONNECTED!!!");
      

  } catch (e) {
    console.log("Error: " + e.message);
    console.log(e.stack);
  }
})()

