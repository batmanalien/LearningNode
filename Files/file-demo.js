var fs = require("fs");

fs.readFile("./data.csv", "utf-8", (err, data) => {
    var array = data.split(",");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + "=^.^=");
    }
});