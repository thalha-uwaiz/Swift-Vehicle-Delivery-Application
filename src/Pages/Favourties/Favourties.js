import React from 'react'
import Styles from './Favourties.module.scss'
import Header from '../../Components/Header/Header'
import LocationIcon from '../../Assets/LocationIcon.png'
import DeleteIcon from '../../Assets/DeleteIcon.png'

const Favourties = () => {
    return (
        <div className={Styles.favourties}>
            <div>
                <Header />
            </div>
            <div className={Styles.notificationContainer}>
                <div >
                    <img className={Styles.locationIcon} src={LocationIcon} alt="Location Icon" />
                </div>
                <div className={Styles.notificationContent}>
                    <div className={Styles.heading}>Office</div>
                    <div className={Styles.address}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>
                </div>
                <div >
                    <img className={Styles.deleteIcon} src={DeleteIcon} alt="DeleteIcon" />
                </div>
            </div>

            <div className={Styles.notificationContainer}>
                <div >
                    <img className={Styles.locationIcon} src={LocationIcon} alt="Location Icon" />
                </div>
                <div className={Styles.notificationContent}>
                    <div className={Styles.heading}>Hospital</div>
                    <div className={Styles.address}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>
                </div>
                <div >
                    <img className={Styles.deleteIcon} src={DeleteIcon} alt="DeleteIcon" />
                </div>

            </div>
            <div className={Styles.notificationContainer}>
                <div >
                    <img className={Styles.locationIcon} src={LocationIcon} alt="Location Icon" />
                </div>
                <div className={Styles.notificationContent}>
                    <div className={Styles.heading}>market</div>
                    <div className={Styles.address}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>
                </div>
                <div >
                    <img className={Styles.deleteIcon} src={DeleteIcon} alt="DeleteIcon" />
                </div>

            </div>

            <div className={Styles.notificationContainer}>
                <div >
                    <img className={Styles.locationIcon} src={LocationIcon} alt="Location Icon" />
                </div>
                <div className={Styles.notificationContent}>
                    <div className={Styles.heading}>School</div>
                    <div className={Styles.address}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>
                </div>
                <div >
                    <img className={Styles.deleteIcon} src={DeleteIcon} alt="DeleteIcon" />
                </div>

            </div>


        </div>
    )
}

export default Favourties