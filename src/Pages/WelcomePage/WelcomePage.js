import React from 'react'
import Styles from './WelcomePage.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className={Styles.Welcomepage}>
        <div className={Styles.Left}>
            <img className={Styles.ScreenPic} alt='Background' src={ScreenPic}/>
        </div>
        <div className={Styles.Right}>
            <div className={Styles.Heading}>Welcome</div>
            <div className={Styles.HaveABetter}>Have a better sharing experience</div>
            <div className={Styles.Buttons}>
                <button className={Styles.CreateAnAcc}>Create an account</button>
                <Link to={'/SignUpPage'}><button className={Styles.Login}>Log in</button></Link>
            </div>
            <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
        </div>
    </div>
  )
}

export default WelcomePage