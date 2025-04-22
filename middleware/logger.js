
//@desc Logs request to console
//@route All/GET    

export const logger = (req,res,next)=>{
    console.log("middleware")
    req.hello = "Hello World"
    console.log(`${req.method} ${req.protocol}://${req.get('host')}----${req.originalUrl}`)
    next()
    console.log("middleware after")
}