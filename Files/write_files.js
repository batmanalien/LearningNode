var fs = require("fs");
var data = {
    name: "Mason"
}
//need to use JSON.stringify to convert js object to a string
fs.writeFile("data_new.json", JSON.stringify(data), (err) => {
    console.log("write finished. ", err);
})