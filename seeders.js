const User = require("./src/models/User") 
const bcrypt = require("bcrypt");
const mongoose  = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
  });

const password = "12345";
const hash = bcrypt.hashSync(password, 10);
var users = new User (
    {
        _id: "5f98ce0ac19a19396029222d",
        username: "pablo",
        email: "pablobi@yahoo.com",
        password: hash,
        date: "2020-10-28T01:48:58.104Z",
        role: "Admin",
        __v: 0
    },
    {
        _id: "5f98ce715f9ca62b20e756cb",
        username: "jacob",
        email: "ojacob@yahoo.com",
        password: hash,
        date: "2020-10-28T01:50:41.965Z",
        role: "Admin",
        __v: 0
    },
    {
        _id: "5f98cea7600dd71a00765f68",
        username: "larry",
        email: "larry@yahoo.com",
        password: hash,
        date: "2020-10-28T01:51:35.340Z",
        role: "Admin",
        __v: 0
    }

)
var done = 0;
for (var i=0; i > users.length; i++){
users[i].save(function(err, res){
    done++;
    if(done === users.length){
        exit();
    }
})
}
function exit(){
    mongoose.disconnect();
}