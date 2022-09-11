import './LoginPage.css'

function LoginPage() {
    return (
        <>
        <div className='login-container'>
            <form>
                <h1>
                    Sign in
                </h1>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' id='email'></input>
                <span className='submit-button-container'>
                    <input type='submit' className='input-submit'></input>
                    <span className='input-submit-text'> Continue </span>
                </span>
                <div className='login-divider'>
                    New to Nozama?
                </div>
                <a href='/create-account' className='create-account'> Create your Nozama account </a>
            </form>
        </div>
        </>
    )
}

export default LoginPage;
