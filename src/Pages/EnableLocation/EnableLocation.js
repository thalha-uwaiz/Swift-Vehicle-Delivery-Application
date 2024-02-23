import React from 'react'
import Styles from './EnableLocation.module.scss'
import Location from '../../Assets/Location.png'
import Map from '../../Assets/Map.png'
import { Link } from 'react-router-dom'



const EnableLocation = () => {

    const FrameComponent = () => {
        return (

            <div className={Styles.Framecontainer}>
                <div className={Styles.LocationIcon}>
                    <img alt='Location' src={Location} />
                </div>
                <div className={Styles.Content}>
                    <div className={Styles.Heading}>Enable your location</div>
                    <div className={Styles.ChooseYourLocation}>
                        Choose your location to start find the <br/>request
                        around you
                    </div>
                </div>
                <div className={Styles.Buttons}>
                    <button className={Styles.UseMyLocation}> Use My Location</button>
                   <Link to={'/WelcomePage'}> <button className={Styles.SkipForNow}> Skip for now</button> </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={Styles.EnableLocation}>
            <img className={Styles.Background} alt="Backgroundimg" src={Map} />
            <FrameComponent />
        </div>
    )
}

export default EnableLocation