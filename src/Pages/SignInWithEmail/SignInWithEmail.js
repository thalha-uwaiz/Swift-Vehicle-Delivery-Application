import React from 'react'
import Styles from './SignInWithEmail.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import Logo from '../../Assets/LogoSwift.png'

const SignInWithEmail = () => {
    return (
        <div className={Styles.SignInWithEmail}>
            <div className={Styles.Left}>
                <img className={Styles.ScreenPic} alt='Background' src={ScreenPic} />
            </div>
            <div className={Styles.Right}>
                <div >
                    <img className={Styles.Logo} alt='Logo' src={Logo} />
                </div>
                <div className={Styles.InputField}>
                    <input className={Styles.EmailOrPhone} placeholder='Email or Phone Number' type='text' />
                    <input className={Styles.Password} placeholder='Enter Your Password' type='password' />
                </div>
                <button className={Styles.forgotPassword}>Forget password?</button>

                <button className={Styles.SignIn}>SignIn</button>
                <div className={Styles.DontHaveAnAcc}> Don’t have an account? &nbsp;
                    <button className={Styles.SignUpBtn}>Sign Up</button></div>
                <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
            </div>
        </div>
    )
}

export default SignInWithEmail