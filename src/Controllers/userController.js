const   create3 = (req,res)=>{
    res.status(201).json({
        status : "success",
        data : "subAdmin data create successfully"
    })
}
const   read3 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "subAdmin data read data successfully"
    })
}
const   deletes3 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "subadmin  data delete successfully"
    })
}
const  update3 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "subadmin data update successfully"
    })
}

module.exports = {create3,read3,deletes3,update3}