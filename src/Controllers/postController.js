const   create1 = (req,res)=>{
    res.status(201).json({
        status : "success",
        data : "user post create successfully"
    })
}
const   read1 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "user post read data successfully"
    })
}
const   deletes1 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "user  post delete successfully"
    })
}
const  update1 = (req,res)=>{
    res.status(200).json({
        status : "success",
        data : "user post update successfully"
    })
}


module.exports = {create1,read1,deletes1,update1}