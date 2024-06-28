import UserFactory from "./UserFactory.js";

const userFactory = new UserFactory()
const org = userFactory.create('org', 'lambeijos', 'lambeijos@gmail.com')
const donator = userFactory.create('donator', 'Bernardo', 'bernalves@rede.ulbra.br')
const admin = userFactory.create('admin', 'Bryan', 'bryanarm@rede.ulbra.br')

console.log(org.toString())
console.log(donator.toString())
console.log(admin.toString())