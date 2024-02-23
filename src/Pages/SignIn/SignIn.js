import React from 'react'
import Styles from './SignIn.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import Logo from '../../Assets/LogoSwift.png'
import GmailIcon from '../../Assets/GmailIcon.png'
import FacebookIcon from '../../Assets/FbIcon.png'
import AppleIcon from '../../Assets/AppleIcon.png'



const SignIn = () => {
    return (
        <div className={Styles.SignIn}>
            <div className={Styles.Left}>
                <img className={Styles.ScreenPic} alt='Background' src={ScreenPic} />
            </div>
            <div className={Styles.Right}>
                <div >
                    <img className={Styles.Logo} alt='Logo' src={Logo} />
                </div>
                <div className={Styles.buttons}>
                    <button className={Styles.Gmail}><img className={Styles.Gmailicon} alt='GmailIcon' src={GmailIcon} />Sign In with Gmail</button>
                    <button className={Styles.FaceBook}><img className={Styles.FacebookIcon} alt='FacebookIcon' src={FacebookIcon} />Sign In with FaceBook</button>
                    <button className={Styles.Apple}><img className={Styles.AppleIcon} alt='AppleIcon' src={AppleIcon} />Sign In with Apple</button>
                </div>

                <div className={Styles.DontHaveAnAcc}> Don’t have an account? &nbsp;
                    <button className={Styles.SignUpBtn}>Sign Up</button></div>










                <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
            </div>
        </div>
    )
}

export default SignIn