import User from "./user.js";

class Org extends User{
    constructor(name, email){
        super(name, email);
        this.campaigns = []
    }

    createCampaign(name){
        let campaign = {name: name, date: new Date().getDate}
        this.campaigns.push(campaign)
        console.log(`Campaign "${name}" created at: ${campaign.date}`)
    }

    toString(){
        return `${super.toString()}, campaigns: ${this.campaigns}`
    }
}

export default Org