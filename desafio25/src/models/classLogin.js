
class classLogin {
    constructor() {

    }

    getContador(req,res) {
        console.log("getContador")
        if (req.session.contador) {
            req.session.contador++;
            console.log(req.session.contador);
            res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`);
          } else {
            req.session.contador = 1;
            console.log(req.session.contador);
            res.send('Bienvenido!');
          }
    }

    getInfo(req, res) {
        res.send({
          session: req.session,
          sessionId: req.sessionID,
          cookies: req.cookies,
        });
      };

    set(req, res) {
        console.log('setea')
        
        const user = req.query.user;
        console.log(user);
        if (user === 'admin') {
            console.log('hola')
            req.session.user = user;
            console.log(req.session.user);
            res.send({msg: 'ok'});
        } else {
            res.send({msg: "Usuario erróneo"});
        }
    }
    

    get(req, res) {
        console.log('controla')
        //const user = req.query.user;
        console.log(req.session.user);

        if (!req.session.user) {
            req.session.destroy((err) => {
            console.log('destroy')
                if (!err) res.send({msg: 'no hay log'});
                else res.send({ msg: 'err' });
              });
        }
  
 
    }

    clear(req, res) {
        req.session.destroy((err) => {
            
            if (!err) res.send({msg: 'ok'});
            else res.send({ msg: 'err' });
          });

    }

}

export const Login = new classLogin();