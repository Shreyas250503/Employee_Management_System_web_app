import mysql from 'mysql';

const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    port: "4306",
    password:"",
    database:"employeems",
    insecureAuth: true,
});

con.connect(function(err){
    if(err)
    {
        console.log("connection error");
    }

    else{
        console.log("connected");

    }
})

export default con;