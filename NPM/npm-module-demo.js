//run npm install lodash to install the module into a local node_modules folder
//use require() to load the module, no need to specify the relative path
//node knows where lodash is (node_modules)

//to install a command line inteface node modules run npm install -g nodemon
//then run nodemon *js to monitor the js file changes and run automatically

//npm init [--yes]: create a pakcage.json, optional --yes flag to set defaults

var _ = require("lodash")

console.log("hello world! welcome to my random cat faces generator in js!");

for (let i = 1; i <= 10; i++) {
    console.log("random cat face generator => " + make_cat_faces(_.random(1, 15)));
}

function make_cat_faces(r){
    let cat_faces = ""
    for (let i = 0; i < r; i++) {
        cat_faces += "(=^.^=)";
    }
    return cat_faces;
}