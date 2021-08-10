let router = require("express").Router();


router.post("/post", function (req,res) {
    let response = {message:"This is the from the post request"};
    res.json(response);
});

module.exports = router;