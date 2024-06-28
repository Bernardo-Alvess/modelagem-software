import User from "./user.js";

class Admin extends User{
    #permissions
    constructor(name, email) {
        super(name, email)
        this.#permissions = {}
    }

    setPermissions(permissions){
        this.#permissions = permissions
    }

    manageUsers(){
        console.log("Admin is managing users")
        //Logic goes here
    }

    toString(){
        return `${super.toString()} ${Object.values(this.#permissions)}`
    }
}

export default Admin