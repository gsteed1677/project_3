const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs");

//we need to choose whether to use email or username
const userSchema = new Schema({
    email: {
        type: String,
        required: "Email is required",
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    username: {
        type: String,
        required: "Username is required",
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: "Password is required",
        unique: true,
        trim: true
    },
    userPosts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }]
    // {
    //     //we will need somethin ghere to save favorites posts for the user, that they drag into the "my favorites list"
    // }

})

const User = mongoose.model("User", userSchema); //do we have to wrap the schema declaration above in a module.exports?
module.exports = User;

//will these work as is for mongoose as well as the sequelize format i got them from?
//if the user is already being defined above will it still hash the password here after -->
// User.prototype.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// User.addHook("beforeCreate", function (user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

// return User;