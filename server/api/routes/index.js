const router = require("express").Router();


const userController = require("../controller/userAPI");
const cabController = require("../controller/cabAPI");

router.post("/userRegister", userController.registerUser);
router.post("/cabRegister", cabController.registerCab);
router.get("/getMinDist/:source/:dest", cabController.getMinDist);
router.get("/availableCar", cabController.availableCar);
router.post("/updateStatus", cabController.updateStatus);
router.get("/cabStatus/:cabs", cabController.cabStatus);


module.exports = router;