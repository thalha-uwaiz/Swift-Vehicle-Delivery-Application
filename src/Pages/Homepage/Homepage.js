import React from 'react'
import Styles from './Homepage.module.scss'
import HomePageHeader from '../../Components/HomePageHeader/HomePageHeader'
import Background from '../../Assets/backgroundNew.jpeg'
import Icon1 from '../../Assets/Icon1.png'
import Icon2 from '../../Assets/Icon2.png'
import Icon3 from '../../Assets/Icon3.png'

const Homepage = () => {
  return (
   <section className={Styles.headerframe}>
    <div><HomePageHeader /></div>
    <div className={Styles.contentFrame}>
      <div className={Styles.content}>
        <p className={Styles.text}>Your Ride</p>
        <p className={Styles.text}>Your Way</p>
        <p className={Styles.text}>Swift</p>
        <p className={Styles.text}>safe and Simple</p>
      </div>

      <div className={Styles.imageContainer}>
    <img  alt="Backgroundimg" src={Background} />

    </div>

    </div>

    <div className={Styles.bottom}>
      <div className={Styles.vision1}>
      <img className={Styles.Icon1} alt="Icon1" src={Icon1} />
      <div className={Styles.vision1Text}>
      Sell houses easily with the help of Listenoryx and to make this line big I am writing more.
      </div>
      </div>
      <div className={Styles.vision2}>
      <img className={Styles.Icon2} alt="Icon2" src={Icon2} />
      <div className={Styles.vision2Text}>
      Sell houses easily with the help of Listenoryx and to make this line big I am writing more.
      </div>
      </div>
      <div className={Styles.vision3}>
      <img className={Styles.Icon3} alt="Icon3" src={Icon3} />
      <div className={Styles.vision3Text}>
      Sell houses easily with the help of Listenoryx and to make this line big I am writing more.
      </div>
      </div>

    </div>
    

   </section>
   
    
    
   
  )
}

export default Homepage