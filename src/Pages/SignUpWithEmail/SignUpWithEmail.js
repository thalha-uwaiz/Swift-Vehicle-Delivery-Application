import React, { useState } from 'react'
import Styles from './SignUpWithEmail.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import Logo from '../../Assets/LogoSwift.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'



const SignUpWithEmail = () => {

  const [phoneNumber, setPhoneNumber] = useState()


  return (
    <div className={Styles.SignUpWithEmail}>
      <div className={Styles.Left}>
        <img className={Styles.ScreenPic} alt='Background' src={ScreenPic} />
      </div>
      <div className={Styles.Right}>
        <div >
          <img className={Styles.Logo} alt='Logo' src={Logo} />
        </div>

        <div className={Styles.Inputfield}>
          <input className={Styles.Name} placeholder='Name' type='text' />
          <input className={Styles.Email} placeholder='Email' type='text' />
          <PhoneInput
            defaultCountry={"Sri Lanka"}
            className={Styles.phoneNumber}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber} />

          <select className={Styles.Gender}>
            <option>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={Styles.AgreeTerms}>
          <input className={Styles.checkbox} type='checkbox' /> <span className={Styles.TermsAndConditons}>&nbsp;By signing up. you agree to the <span className={Styles.Termsofservice}>Terms of service</span> and
            <br /> <span className={Styles.Privacypolicy}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy policy.</span></span>
        </div>

        <Link to={'/VerifyOTP'}><button className={Styles.SignUp}>Sign Up</button></Link>
        <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
      </div>
    </div>
  )
}

export default SignUpWithEmail