const {create,read,deletes,update} = require("../Controllers/adminController")
const {create1,read1,deletes1,update1} = require("../Controllers/postController")
const {create2, read2, deletes2, update2} = require("../Controllers/subAdminController")
const express = require("express")
const { create3, read3, deletes3, update3 } = require("../Controllers/userController")
const router = express.Router()


// admin controller routes


router.post("/auser",create)
router.get("/auser",read)
router.delete("/auser",deletes)
router.put("/auser",update)

// postController

router.post("/puser",create1)
router.get("/puser",read1)
router.delete("/puser",deletes1)
router.put("/puser",update1)

// subAdminController

router.post("/suser",create2)
router.get("/suser",read2)
router.delete("/suser",deletes2)
router.put("/suser",update2)

// userController

router.post("/user",create3)
router.get("/user",read3)
router.delete("/user",deletes3)
router.put("/user",update3)

module.exports = router