
class classLogin {
    constructor() {

    }

    set(req, res) {
        //const user = req.query.user;
        const user = req.query.user;
        if (user === 'admin') {
            console.log('hola')
            res.cookie('user', user, {expire: 5000}).send({msg: 'ok'});
            
        } else {
            res.json({msg: "Usuario erróneo"});
        }
    }
    

    control(req, res) {
        //const user = req.query.user;
        const cookies = req.cookies;

        console.log(cookies);
        
        if (cookies) {
        const keys = Object.keys(cookies);
      
        keys.forEach((aKey) => res.clearCookie(aKey));
        }
        res.render('main')
 
    }

    clear(req, res) {
        const cookies = req.cookies;

        console.log(cookies);
        
        const keys = Object.keys(cookies);
      
        keys.forEach((aKey) => res.clearCookie(aKey));
      
        res.send({ msg: 'ok' });
    }
}

export const Login = new classLogin();