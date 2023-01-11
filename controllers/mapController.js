const db = require('../db')

module.exports.addName = (req, res) => {
    const name = req.body.name;
    const checkName = "select * from store where name=?"
    db.query(checkName, name, (err, response) => {
        if (response.length > 0) {
            res
                .status(422)
                .json({ msg: "this place is already added in the list" });
        } else {
            db.query("INSERT INTO store(name) VALUE(?)", name, (err, result) => {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    res.status(200).json({ msg: "Added Place successfully" });
                } else {
                    res.status(400).json({ msg: "something went wrong" });
                }
            });
        }
    });
};