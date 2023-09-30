const   create = (req,res)=>{
    res.status(201).json({
        status : "success",
        data : "user create successfully"
    })
}
const   read = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "user read data successfully"
    })
}
const   deletes = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "user  data delete successfully"
    })
}
const  update = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "user data update successfully"
    })
}

module.exports = {create,read,deletes,update}