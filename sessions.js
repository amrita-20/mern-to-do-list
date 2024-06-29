const uuid = require("uuid").v4;

const sessions = {};

const addSession = (username) => {
    const sid = uuid();
    sessions[sid] = { username }
    return sid;
}

const getSessionUSer = (sid) => {
    return sessions[sid]?.username;
}

module.exports = {
    addSession,
    getSessionUSer
}

