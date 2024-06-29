function LoginForm () {
    const handleLogin = () => {
        
    }
    return(
        <form className="form" onSubmit={handleLogin}>
            <label htmlFor="username">username</label>
            <input id="username" className="form-input" type="text" />
            <button className="button">Login</button>
        </form>
    )
}

export default LoginForm;