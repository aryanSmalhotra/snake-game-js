const figlet = require("figlet");
const colors= require("colors")

figlet('Hello Worlad',function(err,data){
    if(err){
        console.log("error 404!!! trojan foung")
        console.dir(err)
        return;

    }
    console.log(data.rainbow)
})