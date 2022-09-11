import './LoginPage.css'

function LoginPage() {
    return (
        <>
        <div className='login-container'>
            <form>
                <h1 className='sign-in-header'>
                    Sign in
                </h1>
                <label htmlFor='email' className='form-label'>Enter your email</label>
                <input type='email' className='email-input'></input>
                <span className='submit-button-container'>
                    <input onClick={(e) => {
                        e.preventDefault();
                        console.log('clicked')
                }}
                type='submit' className='input-submit'></input>
                    <span className='input-submit-text'> Continue </span>
                </span>
            </form>
            </div>
            <div className='bottom-container'>
                <div className='login-divider'>
                        <h5 className='login-divider-text'>New to Nozama?</h5>
                </div>
                <a href='/create-account' className='create-account-button'> Create your Nozama account </a>
            </div>

        </>
    )
}

export default LoginPage;
