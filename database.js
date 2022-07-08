const mongoose = require('mongoose');

class Database {


    constructor(){
        this.connect();
    }


    connect(){
        mongoose.connect("mongodb+srv://myTwitterClone:7QkBMbKqZ3H8ItlN@mytwitterclone.t3yon.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("database connection successfull");
        })
        .catch((err)=>{
            console.log("database connection error " + err);
        })

    }

}

module.exports = new Database();