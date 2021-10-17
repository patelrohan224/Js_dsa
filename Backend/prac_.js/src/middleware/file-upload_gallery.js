const multer=require("multer");
const path=require("path");

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../uploads/gallery"))
    },
    filename:function(req,file,cb){
        const uniquePrefix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,uniquePrefix+'-'+file.originalname)
    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype=="image/jpeg" || file.mimetype=="image/png"  || file.mimetype=="image/PNG"){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

module.exports=multer({
 
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        filesize:1024 * 1024 * 5
    }
})
