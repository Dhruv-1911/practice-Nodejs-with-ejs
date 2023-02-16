const EventEmiter = require("events")
class Demo extends EventEmiter{
    demo = ()=>{
        console.log("this is demo")
        this.emit("msg");
    }
}

module.exports=Demo;