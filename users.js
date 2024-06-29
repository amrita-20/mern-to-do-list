
const isValidUSer = (username) => {
    if(!username || !username.match(/^[A-Za-z0-9_]+$/))
        return false;
    return true;
}