const uuid = require("uuid").v4;

const sessions = {};

const addSessionUser = (username) => {
    const sid = uuid();
    sessions[sid] = { username }
    return sid;
}

const getSessionUser = (sid) => {
    return sessions[sid]?.username
}

const deleteUser = (sid) => {
    delete sessions[sid];
}

module.exports = {
    addSessionUser,
    getSessionUser
}