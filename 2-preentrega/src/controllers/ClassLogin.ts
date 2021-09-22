class ClassLogin {
    private user: string;
    private password: string;
    private admin: boolean;

    constructor() {
        this.user = "";
        this.password = "";
        this.admin = false;
    }

    validacion(body:any){
        console.log(body)
        this.user = body.user;
        this.password = body.password;
        this.admin = false;

        if (this.user == "admin" && this.password == "1234") {
            this.admin=true;
            return this.admin;
        } else {
            return false;
        }
    }
}

export const Login = new ClassLogin()