import './LoginPage.css'

function HomePage() {
    return (
        <>
        <div class='login-container'>
            <form>
                <h1>
                    Sign in
                </h1>
                <label for='email' class='form-label'>Email</label>
                <input type='email' id='email'></input>
                <input type='submit'>Continue</input>
                <div class='login-divider'>
                    New to Nozama?
                </div>
            </form>
        </div>
        </>
    )
}

export default HomePage;
