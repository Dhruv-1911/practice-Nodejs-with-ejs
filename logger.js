var url ="http://mylogger.io/log";


const logger=function(message){
    console.log("this is from logger js file");
}

module.exports.logger= logger;
module.exports.url=url;
