const db = require("../../models");

//this is acting as our controller
module.exports = {
    findAll: function (req, res) {
        //how the data from the client
        console.log(req.body)
        db.Post
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {

        // req.body is going to be w/ you send from the front
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        //console.log(req.body)
        db.Post              //   conditions   ,  update
            .findOneAndUpdate({ _id: req.params.id }, {
                $set: req.body
            }) //req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}