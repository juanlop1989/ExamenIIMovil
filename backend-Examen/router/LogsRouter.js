const express = require('express')
const logsController= require('../controller/LogsController')


const router = express.Router();

router.post('/',logsController.postLogs)
router.get('/',logsController.gettLogs)


module.exports=router;