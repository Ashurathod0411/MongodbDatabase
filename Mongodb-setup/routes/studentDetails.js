const express = require("express");
const studentDetailsmodel = require("../models/StudentDetailsModel");

const router = express.Router();

router.post("/create", async function (request ,response ){
    console.log("request.body", request.body);
    try {
    //const dataBaseCreationResponse = await studentDetailsmodel.create(request.body);
    console.log("dataBaseCreationResponse", dataBaseCreationResponse);
    response.send({"Result":"Success"});
    } catch (error) {
        console.log("Error Occured", error)
    }
});

router.get("/list", async function (request, response) {
    try{
    const listOfStudentDetails = await studentDetailsmodel.find({},{__v:0, _id:0});
    //console.log("Data from Database", listOfStudentDetails);
    response.send({ Result: listOfStudentDetails });
    } catch (error) {
    console.log("Error Occured", error)
}
});

module.exports = router;