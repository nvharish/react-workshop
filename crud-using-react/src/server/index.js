const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config.json');

//CRUD operations

let app = express();
app.use(cors());
app.use(express.json());
//create schema
//schema requires an object id
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", Schema({
    id: ObjectId,
    name: String,
    age: String,
    dob: String,
    country: String,
    power: String
}));

const url = config.url.replace("{{user}}", config.user)
    .replace("{{password}}", config.password)
    .replace("{{cluster}}", config.cluster)
    .replace("{{dbstring}}", config.dbstring)
    .replace("{{dbname}}", config.dbname);

console.log(url);

mongoose.connect(url)
    .then(function () {
        console.log('Connected to mongodb');
    })
    .catch(function (error) {
        console.log('Could not connect :' + error);
    });

//create
app.post('/users', function (req, res) {
    console.log(req.body);
    let user = new User(req.body);
    user.save()
        .then(dbres => {//__v will be added by mongoose to keep track that document created by mongoose
            console.log('User saved successfully', dbres);
            res.status(200).send({ "message": "User saved successfully" });
            res.end();
        })
        .catch(err => {
            console.log("Error ", err)
            res.status(400).send({ "error": "Something went wrong" });
            res.end();
        });
});

//read
app.get('/users', function (req, res) {
    User.find()
        .then(dbres => res.send(dbres))
        .catch(err => console.log(err));
});

//read with parameters
app.get('/users/:info', function (req, res) {
    console.log(req.params.info);
    User.find()
        .then(dbres => {
            res.send(dbres);
            res.end();//to end response
        })
        .catch(err => console.log(err));
});

//update
app.patch('/users/:id', function (req, res) {
    User.findByIdAndUpdate({ _id: req.params.id })
        .then(dbres => {
            let user=new User(dbres);
            user.name=req.body.name;
            user.age=req.body.age;
            user.dob=req.body.dob;
            user.country=req.body.country;
            user.power=req.body.power;

            user.save().then(updatedData => {
                console.log('Updated ', updatedData);
                res.status(200).send({
                    "message": "User updated"
                });
                res.end();
            }).catch(err => console.log('Error ', err));
        })
        .catch(err => console.log('Error ', err));
});

//delete
app.delete('/users/:id', function (req, res) {
    User.findByIdAndDelete({ _id: req.params.id })
        .then(dbres => {
            console.log('deleted ', dbres);
            res.status(200).send({
                "message": "User deleted"
            });
            res.end();
        })
        .catch(err => console.log(err));
});

app.listen(config.port, config.host, function (error) {
    if (error)
        console.log('Error: ' + error);
    else
        console.log('Node server is started at ' + config.port);
});