const EventEmiter = require('events')

class Event extends EventEmiter{
     test=()=>{
        console.log("this is practice")

        this.emit("checkmsg",{id:1,name:'dhruv'});
    }
}
module.exports=Event;