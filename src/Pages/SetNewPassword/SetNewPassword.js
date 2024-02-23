import React from 'react'
import Styles from './SetNewPassword.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import Logo from '../../Assets/LogoSwift.png'




const SetNewPassword = () => {
    // const [password, setPassword] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={Styles.SetNewPassword}>
           
            <div className={Styles.Left}>
                <img className={Styles.ScreenPic} alt='Background' src={ScreenPic} />
            </div>
            <div className={Styles.Right}>
                <div >
                    <img className={Styles.Logo} alt='Logo' src={Logo} />
                </div>
                <div className={Styles.Heading}>Set New password</div>
                <div className={Styles.subHeading}>Set your New password</div>
                <div className={Styles.passwordField}>
                    <input className={Styles.password} placeholder='Enter your New password' type='password' />
                    <input className={Styles.confirmPassword} placeholder='Confirm new password' type='password' />
                </div>
                <div className={Styles.passwordInfo}>Atleast 1 number or a special character</div>
                <button className={Styles.Save}>Save</button>
                <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
            </div>
        </div>
    )
}

export default SetNewPassword