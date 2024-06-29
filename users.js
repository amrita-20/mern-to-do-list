const users = {};

const isValidUSer = (username) => {
  if (!username || !username.match(/^[A-Za-z0-9_]+$/)) return false;
  return true;
};

const addUserData = (username, userData) => {
  users[username] = userData;
};

const getUserData = (username) => {
  return users[username];
};

module.exports = {
  isValidUSer,
  addUserData,
  getUserData,
};
