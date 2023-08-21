// LOAD MODULES
const router = require("express").Router();
const fs = require("fs");

// ROUTING
// GET REQUEST: READS FROM ./db/db.json AND RETURNS FOR RENDERING
router.get("/notes", function (req, res) {

    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });

});

// API POST REQUEST
// ON USER SAVE THE NOTE IS WRITTEN TO db.json
router.post("/notes", function (req, res) {

    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        let raw = JSON.parse(data);
        raw.push(req.body);

        fs.writeFile("./db/db.json", JSON.stringify(raw), function (err) {
            if (err) return err;
            console.log("json write was successful");
        });

    });

    res.end();

});

module.exports = router;