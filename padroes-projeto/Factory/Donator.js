import User from "./user.js";

class Donator extends User{
    constructor(name, email){
        super(name, email);
    }

    donate(amount){
        console.log(`R$${amount} donated`)
    }

    toString(){
        return `${super.toString()} - Donator`
    }
}

export default Donator