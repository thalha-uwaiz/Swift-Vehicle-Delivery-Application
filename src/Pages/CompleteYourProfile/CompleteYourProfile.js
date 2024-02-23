import React, { useState } from 'react'
import Styles from './CompleteYourProfile.module.scss'
import ScreenPic from '../../Assets/LeftBackground.jpg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ProfilePic from '../../Assets/ProfilePic.png'


const CompleteYourProfile = () => {
    const [phoneNumber, setPhoneNumber] = useState()

    return (
        <div className={Styles.CompleteYourProfile}>
            <div className={Styles.Left}>
                <img className={Styles.ScreenPic} alt='Background' src={ScreenPic} />
            </div>
            <div className={Styles.Right}>
                <img className={Styles.ProfilePic} alt='ProfilePic' src={ProfilePic} />

                <div className={Styles.Inputfield}>
                    <input className={Styles.Name} placeholder='Full Name' type='text' />
                    <input className={Styles.Email} placeholder='Email' type='text' />
                    <PhoneInput
                        defaultCountry={"Sri"}
                        className={Styles.phoneNumber}
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={setPhoneNumber} />
                    <input className={Styles.Street} placeholder='Street' />
                    <input className={Styles.City} placeholder='City' />
                    <select className={Styles.District}>
                        <option>District</option>
                        <option>Colombo</option>
                        <option>Batticaloa</option>
                        <option>Mullaitivu</option>
                        <option>Kilinochi</option>
                        <option>Matara</option>
                        <option>Ampara</option>
                        <option>Anurathapura</option>
                        <option>Matale</option>
                        <option>Jaffna</option>
                        <option>Gampaha</option>
                        <option>Mannar</option>
                        <option>Badulla</option>
                        <option>Nuwera-Eliya</option>
                        <option>Hampantota</option>
                        <option>kegalle</option>
                        <option>Vavuniya</option>
                        <option>Polonnaruwa</option>
                        <option>Akkaraipatru</option>
                        <option>Galle</option>
                        <option>Kalutura</option>
                        <option>Kandy</option>
                        <option>Kurunagala</option>
                    </select>
                </div>
                <div className={Styles.buttons}>
                    <button className={Styles.Cancel}>Cancel</button>
                    <button className={Styles.Save}>Save</button>
                </div>
                <footer className={Styles.footer}>© 2020 Swift, Inc.</footer>
            </div>
        </div>
    )
}

export default CompleteYourProfile