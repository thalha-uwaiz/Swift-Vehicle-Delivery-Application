import React from 'react'
import Styles from './HomePageHeader.module.scss'
import Logo from '../../Assets/LogoSwift.png'
import { Link } from 'react-router-dom'


const HomePageHeader = () => {
  return (
    <header className={Styles.Header}>
        <img className={Styles.Logo} alt="Swift" src={Logo} />
        <div className={Styles.Buttons}>
        <Link to={'/SignUpWithEmail'}><button className={Styles.Sigin}>SignIn</button></Link>
        <Link to={'/WelcomePage'}><button className={Styles.Login}>LogIn</button></Link>
        </div>

    </header>
  )
}

export default HomePageHeader