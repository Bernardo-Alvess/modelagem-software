class ConfigSingleton{
    constructor(){
        if(!ConfigSingleton.instance){
            this.apiUrl = ''
            this.port = 0
            this.environment = ''
            ConfigSingleton.instance = this
        }

        return ConfigSingleton.instance
    }

    getConfig(config){
        switch(config){
            case 'port':
                return this.port
            case 'apiUrl':
                return this.apiUrl
            case 'environment':
                return this.environment
            default:
                throw new Error(`No "${config}" attribute`)
        }
    }

    setConfig(config, value){
        switch(config){
            case 'port':
                if(typeof value !== 'number'){
                    throw new Error(`Invalid data type for ${config}, expected Number`)
                }
                this.port = value
                break;
            case 'apiUrl':
                if(typeof value !== 'string'){
                    throw new Error(`Invalid data type for ${config}, expected String`)
                }
                this.apiUrl = value
                break
            case 'environment':
                if(typeof value !== 'string'){
                    throw new Error(`Invalid data type for ${config}, expected String`)
                }
                this.environment = value
                break
            default:
                throw new Error(`No "${config}" attribute`)
        }
    }
}

export { ConfigSingleton }
