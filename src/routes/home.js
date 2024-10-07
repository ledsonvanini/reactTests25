
const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../views/index.html"));
   
});
router.get("/sobre", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../views/about.html"));
});
// // 404 page not found
// router.use((req, res) => {
//     res.status(404).sendFile(__dirname + "/src/views/404.html")
// })

module.exports = router ;