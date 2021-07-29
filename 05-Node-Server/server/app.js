let express = require("express");
const app = express();
let journal = require('./controllers/journalcontroller')

// app.use("/test", function(req,res){
//     res.send("This is a message from the test endpoint on the server!");
// });

// app.use("/allison", function(req,res){
//     res.send("My name is Allison and I'm 26 years old.")
// });

// Have endpoint of journal/practice
// Send a response from the endpoint

app.use('/journal', journal);

app.listen(3000, function () {
    console.log("App is listening on port 3000");
});