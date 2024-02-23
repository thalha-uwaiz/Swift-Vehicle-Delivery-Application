import React from 'react'
import Styles from './SignUpPage.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import Logo from '../../Assets/LogoSwift.png'
import GmailIcon from '../../Assets/GmailIcon.png'
import FacebookIcon from '../../Assets/FbIcon.png'
import AppleIcon from '../../Assets/AppleIcon.png'
import { Link } from 'react-router-dom'


const SignUpPage = () => {
  return (
    <div className={Styles.SignUpPage}>
      <div className={Styles.Left}>
        <img className={Styles.ScreenPic} alt='Background' src={ScreenPic} />
      </div>
      <div className={Styles.Right}>
        <div >
          <img className={Styles.Logo} alt='Logo' src={Logo} />
        </div>
        <div className={Styles.buttons}>
          <Link to={'/SignUpWithEmail'}><button className={Styles.Gmail}><img  className={Styles.Gmailicon} alt='GmailIcon' src={GmailIcon} />Sign up with Gmail</button></Link>
          <button className={Styles.FaceBook}><img  className={Styles.FacebookIcon} alt='FacebookIcon' src={FacebookIcon} />Sign up with FaceBook</button>
          <button className={Styles.Apple}><img  className={Styles.AppleIcon} alt='AppleIcon' src={AppleIcon} />Sign up with Apple</button>
        </div>

        <div className={Styles.AlreadyWehave}> Already have an account? &nbsp;
        <Link to={'/WelcomePage'}><button className={Styles.SignInBtn}>Sigin In</button></Link></div>










        <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
      </div>
    </div>
  )
}

export default SignUpPage