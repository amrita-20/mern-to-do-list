import { useState } from "react";

function LoginForm ({ onLogin }) {

    const [username, setUsername] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(username)
    }

    return (
        <form name="login">
            <label htmlFor="username">username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="button" onClick={handleLogin}>Submit</button>
        </form>
    )
}

export default LoginForm;