// import passport from 'passport';
// import passportLocal from 'passport-local';
// import { UserModel } from '../services/mongodb';
// import Joi from 'joi';

// const LocalStrategy = passportLocal.Strategy;

// const strategyOptions = {
//   usernameField: 'username', //username es el campo del json que viene por request
//   passwordField: 'password', //password es el campo del json que viene por request
//   passReqToCallback: true,
// };

// const loginFunc = async (req, username, password, done) => {
//   const user = await UserModel.findOne({ username });

//   if (!user) {
//     return done(null, false, { message: 'User does not exist' });  //done implica que termina. el false del segundo parámetro es fundamental
//   }
//   if (!user.isValidPassword(password)) {
//     return done(null, false, { message: 'Password is not valid.' });
//   }
//   console.log('SALIO TODO BIEN');
//   return done(null, user);
// };

// //validación de usuario con JOI
// const validarUsuario = ( objeto ) => {
//     const JoiSchema = Joi.object({
//         username: Joi.string()
//                 .min(6)
//                 .max(30)
//                 .required(),
//         email: Joi.string()
//                  //.email() saqué esto porque entre mongoose y joi tenia problemas
//                  .required(),
//         password: Joi.string()
//                   .min(8)
//                   .max(30)
//                   .required(),
//     }).options({abortEarly: false});

//     return JoiSchema.validate(objeto);
//  }

// const signUpFunc = async (req, username, password, done) => {
//     console.log('entrando en middleware signup')
//   try {
//     console.log(req.body)
//     const {username, password, email} = req.body

//     const validacion = validarUsuario(req.body)

//     if (!validacion.error) {
//         console.log(username, password, email);
        
//     } else {
//         console.log(username, password, email);
//         console.log('error de joi')
//         return done(null,false)
//     }
    
//           //acá usa el pre de mongoose

//          const userData = {
//                 username,
//                 email,
//                 password
//             };
//           const newUser = new UserModel(userData);

//           await newUser.save();
    
//           return done(null, newUser);

//     // const query = { //consulta de mongo. si encuentra username o email
//     //   $or: [{ username: username }, { email: email }],
//     // };

//     // console.log(query);
//     // const user = await UserModel.findOne(query);

//     // if (user) {
//     //   console.log('User already exists');
//     //   console.log(user);
//     //   return done(null, false, 'User already exists');
//     // } else {
//     //   const userData = {
//     //     username,
//     //     password,
//     //     email
//     //   };

//   } catch (error) {
//     done(error);
//   }
// };

// export const isLoggedIn = (req, res, done) => {
//   if (!req.user) {
//       return res.status(401).json({ msg: 'Unathorized' });
//   } 

//   done();
// };

// passport.use('login', new LocalStrategy(strategyOptions, loginFunc));
// passport.use('signup', new LocalStrategy(strategyOptions, signUpFunc));

// passport.serializeUser((user, done) => {
//     // console.log(user);
//     done(null, user._id);
//   });
  
//   passport.deserializeUser((userId, done) => {
//     UserModel.findById(userId, function (err, user) {
//       done(err, user);
//     });
//   });

// export default passport;
