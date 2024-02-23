import React from 'react'
import Styles from './Header.module.scss'
import Logo from '../../Assets/LogoSwift.png'
import ProfilePic from '../../Assets/ProfilePic.png'
import ProfileIcon from '../../Assets/ProfileIcon.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={Styles.Header}>

      <div className={Styles.sectionOne}>
        <img className={Styles.Logo} alt='Logo' src={Logo} />
      </div>

      <div className={Styles.sectionTwo}>
      <nav className={Styles.navigation}>
        <Link className={Styles.home}>Home</Link>
        <Link className={Styles.aboutUs}>AboutUs</Link>
        <Link to={'/Favourties'} className={Styles.favourite}>Favourite</Link>
        <Link className={Styles.dashboard}>Dashboard</Link>
        <Link to={'/HelpAndSupport'} className={Styles.help}>Help</Link>
        </nav>
      </div>
      

      <div className={Styles.sectionThree}>
        <button className={Styles.logOut}>LogOut</button>
      </div>

      <div className={Styles.sectionFour}>
        <img src={ProfilePic} alt="ProfilePic"  className={Styles.ProfilePic}/>
        <div className={Styles.profileName}>Thalha</div>
        <img alt='Profileicon' src={ProfileIcon} className={Styles.Profileicon}/>
        
      </div>
    </header>
  )
}

export default Header