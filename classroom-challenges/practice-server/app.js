let express = require("express");
let app = express();

let testController = require("./controllers/testcontroller"); 
let calcontroller = require("./controllers/calculatorcontroller");
app.use("/test", testController);
app.use("/calc", calcontroller);



// app.use('/test', testController);

// app.use("/test", function(req, res){
//     let response = { message: "This is a test"};
//     res.json(response);
// });

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});