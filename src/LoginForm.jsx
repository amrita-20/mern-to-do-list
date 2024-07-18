function LoginForm () {
    return (
        <form name="login">
            <label htmlFor="username">username</label>
            <input type="text" id="username"></input>
            <button type="button">Submit</button>
        </form>
    )
}

export default LoginForm;