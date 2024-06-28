import { ConfigSingleton } from "./ConfigSingleton.js";

let configSingleton = new ConfigSingleton()
let config2 = new ConfigSingleton()

configSingleton.setConfig('apiUrl', 'https://api.example.com');
configSingleton.setConfig('port', 3000);
configSingleton.setConfig('environment', 'production');

console.log(config2.getConfig('apiUrl'))
console.log(configSingleton.getConfig('apiUrl'))

console.log(config2.getConfig('port'))
console.log(configSingleton.getConfig('port'))

console.log(config2.getConfig('environment'))
console.log(configSingleton.getConfig('environment'))

console.log(configSingleton === config2)