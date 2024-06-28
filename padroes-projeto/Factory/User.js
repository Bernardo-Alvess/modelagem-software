class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    toString(){
        return `User (name: ${this.name}, email: ${this.email})`
    }
}

export default User