const express = require("express");
const router = express.Router();
const departamrntocontroller = require("../controllers/departamentocontroller")

router.get("/",departamrntocontroller.consultar)
router.post("/",departamrntocontroller.modificar)

module.exports = router;