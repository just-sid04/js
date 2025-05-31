const router = require("express").Router();

router.get("/ping", (req, res) => {
    res.json({ Response: "pong" });

});

router.post("/pong", (req, res) => {
    const request = req.body;
    res.json(request);
});

module.exports = router;