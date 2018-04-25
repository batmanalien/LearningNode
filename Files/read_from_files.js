let fs = require("fs");
var require_data = require("./data.json"); //alternative way reading a file

console.log("data with require: ", require_data);
console.log("data with require: ", require_data.name);

fs.readFile('./data.json', "utf-8", (err, data) => {
    console.log("data raw", data);  //raw json object
    console.log("data.name raw", data.name);    //undefined
    let data_fs = JSON.parse(data); //convert json into a js object
    console.log("data with fs: ", data_fs);
    console.log("data.name with fs: ", data_fs.name); //now name is accessible via object
});
