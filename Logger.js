//MiddleWare
const logger = (req,res,next)=>{
    console.log(`${new Date().toLocaleTimeString()} | ${req.method} | I am logger` );
    next();
    }
    

    module.exports = logger;