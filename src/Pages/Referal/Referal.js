import React from 'react'
import SideBar from '../../Components/SideBar'
import Header from '../../Components/Header/Header'
import Styles from './Referal.module.scss'


const Referal = () => {
  return (
    <div className={Styles.ReferalContainer}>
      <div className={Styles.header}><Header /></div>


      <div className={Styles.BodyContainer}>

        <div className={Styles.sideBar}><SideBar /></div>

        <div className={Styles.right}>

          <div className={Styles.heading}>
            Refer a friend and Earn $20
          </div>

         <div> <input className={Styles.textBox} placeholder='Enter Your Friend name' type='text' /></div>

          <button className={Styles.invite}>Invite</button>
        </div>
      </div>
    </div>
  )
}

export default Referal