const cookieParser = require("cookie-parser");
const express = require("express");

const sessions = require("./sessions");
const users = require("./users");
const todos = require("./todos");

const app = express();

app.use(cookieParser);
app.use(express.json());
app.use(express.static("./dist"));

const PORT = 3000;

app.get("/api/v1/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sessions.getSessionUSer;

  if (!sid || !users.isValidUSer(username)) {
    res.status(401).json({ error: "auth is missing" });
    return;
  }
  res.status(200).json({ username });
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

// app.post("/api/v1/session", (req, res) => {
//   const { username } = req.body;
//   if (!users.isValidUSer(username)) {
//     res.status(400).json({ error: "invalid username" });
//     return;
//   }
//   if (username === "password") {
//     res.status(403).json({ error: "auth-insufficient" });
//     return;
//   }

//   const sid = sessions.addSession(username);
//   const existingUser = users.getUserData(username);
//   if (!existingUser) {
//     users.addUserData(username, todos.makeTodoList());
//   }
//   res.cookie("sid", sid);
//   res.status(200).json(users.getUserData(username));
// });

// app.get("/api/v1/todos", (req, res) => {
//     const sid = req.cookies.sid;
//     const username  = sid ? sessions.getSessionUSer(sid) : '';
//     if(!users.isValidUSer(username)){
//         res.status(401).json({error: "auth-missing"});
//         return;
//     }
//     res.json(users.getUserData(username).getTodos());
// })
