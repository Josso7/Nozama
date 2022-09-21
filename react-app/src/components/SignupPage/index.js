import './SignupPage.css'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <>
        <div className='signup-form-container'>
            <form className='signup-form'>
                <h1 className='top-header'>Create account</h1>
                <label className='username-label'>Username</label>
                <input className='username-input' onChange={e => setUsername(e.target.value)}></input>
                <label className='email-label'>Email</label>
                <input className='email-input' onChange={e => setEmail(e.target.value)}></input>
                <label className='password-label'>Password</label>
                <input className='password-input' onChange={e => setPassword(e.target.value)}></input>
                <label className='repeat-password-label'>Re-enter password</label>
                <input className='repeat-password-input' onChange={e => setRepeatPassword(e.target.value)}></input>
                <span className='create-account-button-text'>
                    <input
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('clicked');
                        }}
                        type='submit'
                        className='input-submit'>
                    </input>
                    Create your Nozama account
                </span>
            </form>
            <div className='divider'></div>
            <div className='account-exists-text'>Already have an account?<a href='/login'>Sign in</a></div>
        </div>
        </>
    )
}

export default SignupPage;
