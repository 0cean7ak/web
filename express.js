const express = require("express")
const nunjucks = require("nunjucks")
const session = require('express-session')
const Memorystore = require('memorystore')(session)
const router = require('./routes/index.js')
const app = express()

app.set("view engine", "html")
nunjucks.configure("./views", {
    express: app,
    watch: true
})

let maxAge = 5*60*1000
app.use(session({
    secret: "wegf6124@#$@#!",
    resave: false,
    saveUninitialized: true,
    store: new Memorystore({ checkPeriod: maxAge}),
    cookie: {
        maxAge: maxAge
    }
}))

app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(3000, ()=>{
    console.log("sever onload")
})
