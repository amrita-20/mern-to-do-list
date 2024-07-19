const express = require("express");
const cookieParser = require("cookie-parser");

const session = require("./sessions");
const user = require("./users");
const todo = require("./todos")

const app = express();

const PORT = 3000;

app.use(express.static("./dist"))
app.use(express.json());
app.use(cookieParser());

app.get("/api/v1/session", (req, res) => {
    const sid = req.cookies.sid;

    const username = session.getSessionUser(sid);

    if(!sid || !user.isValidUSer(username)){
        res.status(401).json({error : "auth is missing"})
        return;
    }
    res.status(200).json({username})
})

app.post("/api/v1/session", (req, res) => {
    const { username } = req.body;

    if(!user.isValidUSer(username)){
        res.status(401).json({error: "username is not valid"})
        return;
    }
    const sid =  session.addSessionUser(username)
    const isExistingUser = user.getUserData(username)
    if(!isExistingUser){
        user.addUserData(username, todo.makeTodoList(username))
    }

    res.cookie("sid", sid);
    res.status(200).json(user.getUserData(username));
})




app.listen(PORT, () => {
    console.log("listening on", PORT);
})

