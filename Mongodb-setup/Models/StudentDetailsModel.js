const mongoose = require("mongoose");

const studentDetailsScheme = new mongoose.Schema(
    {
        name: String,
        collegename: String,
        location: String,
    },
    {
        Collection: "studentDetailsCollection",
    }
);

const studentDetailsmodel= mongoose.model("StudentDetails", studentDetailsScheme);
module.exports = studentDetailsmodel;