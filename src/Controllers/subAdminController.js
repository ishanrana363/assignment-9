const   create2 = (req,res)=>{
    res.status(201).json({
        status : "success",
        data : "subAdmin data create successfully"
    })
}
const   read2 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "subAdmin data read data successfully"
    })
}
const   deletes2 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "subadmin  data delete successfully"
    })
}
const  update2 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "subadmin data update successfully"
    })
}

module.exports = {create2,read2,deletes2,update2}