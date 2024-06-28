import Admin from "./Admin.js";
import Donator from "./Donator.js";
import Org from "./Org.js";

class UserFactory{
    create(type, name, email){
        switch(type){
            case "admin":
                return new Admin(name, email)
            case "org":
                return new Org(name, email)
            case "donator":
                return new Donator(name, email)
            default:
                throw new Error('Invalid class requested')
        }
    }
}

export default UserFactory