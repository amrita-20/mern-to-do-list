const uuid = require("uuid").v4;

const sessions = {};

const getSessionUser = (sid) => {
    return sessions[sid]?.username
}

module.exports = {
    getSessionUser
}