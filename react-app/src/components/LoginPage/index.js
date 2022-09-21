import './LoginPage.css'
import { useState } from 'react'
import { login } from '../../store/session';
import { useDispatch } from 'react-redux';
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [displayErrors, setDisplayErrors] = useState(false);
    const [displayPassword, setDisplayPassword] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password))
        if(data) {
            setErrors(data);
        }
    }

    return (
        <>
        <div className='login-container'>
            <form onSubmit={e => handleSubmit(e)}>
                <h1 className='sign-in-header'>
                    Sign in
                </h1>
                {!displayPassword &&
                <label htmlFor='email' className='form-label'>Enter your email</label> &&
                <input type='email' className='email-input'></input>}
                <span className='submit-button-container'>
                    <input type='submit' className='input-submit'></input>
                    <span className='input-submit-text'> Continue </span>
                </span>
            </form>
            </div>
            <div className='bottom-container'>
                <div className='login-divider'>
                        <h5 className='login-divider-text'>New to Nozama?</h5>
                </div>
                <a href='/signup' className='create-account-button'> Create your Nozama account </a>
            </div>

        </>
    )
}

export default LoginPage;
