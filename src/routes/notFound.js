
const express = require('express')
const path = require('path')
const router = express.Router()


// 404 page not found
router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname , "../views/404.html"))
})

module.exports = router ;