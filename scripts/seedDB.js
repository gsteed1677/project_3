const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/hobbyDB"
);

const userPostSeed = [
    {
        username: "mosiac25",
        title: "knitting",
        description: "2 different colored yarns of medium thickness, and two sets of knitting needles, size 5 and 8",
        price: 15,
        contactNumber: null,
        contactEmail: "showtime321@yahoo.com"
    },
    {
        username: "tinytin",
        title: "stained glass",
        description: "15 colors mixed glass, foil, glass cutter, soldering iron, NO grinder included",
        price: 50,
        contactNumber: null,
        contactEmail: "yoursforcheap78@yahoo.com"
    },
    {
        username: "artgurl",
        title: "painting",
        description: "3 8x10 canvases, mixed brushes and some acrylic paint editing to see how this will look cuz i think it will look amazing but who knows",
        price: 30,
        contactNumber: 555 - 897 - 3210,
        contactEmail: null
    },
    {
        username: "mooddude",
        title: "ceramics",
        description: "one throwing wheel, sponges, and box of clay. wheel is barely used",
        price: 85,
        contactNumber: 555 - 909 - 4582,
        contactEmail: "whatsupchuck1@yahoo.com"
    }
]

db.Post.remove({})
    .then(() => db.Post.collection.insertMany(userPostSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });